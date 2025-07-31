import { useEffect, useState, useContext } from "react"
import { useSelector } from "react-redux"
import { Positions } from "../../../shared/services/position"
import { CreateEmployee } from "../../services/createEmployee"
import { UserContext } from "../../context/UserContext"
import { UpdateEmployee } from "../../services/UpdateEmployee"

const AdminForm = ({ setUser }) => {
    const { token } = useSelector(state => state.user)

    const userInfo = useContext(UserContext)

    const [positions, setPositions] = useState({})
    //const [formData, setFormData] = useState();

    useEffect(() => {
        const getPosition = async () => {
            const response = await Positions()
            setPositions(response)
        }

        getPosition()
    }, [])

    const submit = async (e) => {
        e.preventDefault()

        
        const response = userInfo.id ? await UpdateEmployee(userInfo.id, userInfo, token) : await CreateEmployee(userInfo, token)
        if (response) {
            clear()
        }
    }

    const clear = () => {
        /*setFormData({
            email: '',
            name: '',
            lastName: '',
            position: '',
            birthdate: ''
        })*/

        setUser({
            id: '',
            email: '',
            name: '',
            lastName: '',
            position: '',
            birthdate: ''
        })
    }

    return (
        <form onSubmit={submit}>
            <input type="hidden" value={userInfo.id} />
            <div>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={(e) => { setUser({ ...userInfo, ['email']: e.target.value }) }}
                />
            </div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userInfo.name}
                    onChange={(e) => { setUser({ ...userInfo, ['name']: e.target.value }) }}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={(e) => { setUser({ ...userInfo, ['lastName']: e.target.value }) }}
                />
            </div>
            <div>
                <label>Position</label>
                <select
                    id="position"
                    name="position"
                    value={userInfo.position}
                    onChange={(e) => { setUser({ ...userInfo, ['position']: e.target.value }) }}
                >
                    <option value="">Seleccionar</option>
                    {positions.length > 0 &&
                        positions.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                </select>
            </div>
            <div>
                <label>Birthdate</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={userInfo.birthdate}
                    onChange={(e) => { setUser({ ...userInfo, ['birthdate']: e.target.value }) }}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default AdminForm