import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../shared/user/userSlice'
import { Positions } from '../../../shared/services/position'
import { Update } from '../../services/update'

const EditMode = ({ user }) => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: user.name,
        lastName: user.lastName,
        position: user.position,
        birthdate: user.birthdate
    })
    const [positions, setPositions] = useState({})
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const getPosition = async () => {
            const response = await Positions()
            setPositions(response)
        }

        getPosition()
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const response = await Update(user.id, formData, user.token)

        if (response) {
            dispatch(setUser(response))
            setLoading(false)
        }
    }

    return (
        <form onSubmit={submit}>
            {loading && <span>Loading ... </span>}
            <div>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    disabled
                />
            </div>
            <div>
                <label>Postition</label>
                <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={ (e) => { setFormData({ ...formData, ['position']: e.target.value }) }}
                >
                    { positions.length > 0 && 
                        positions.map((item, index) => <option key={index} value={item}>{ item }</option>)
                    }
                </select>
            </div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={ (e) => { setFormData({ ...formData, ['name']: e.target.value }) }}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={ (e) => { setFormData({ ...formData, ['lastName']: e.target.value }) }}
                />
            </div>
            <div>
                <label>Birthdate</label>
                <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={formData.birthdate.split(" ")[0]}
                    onChange={(e) => { setFormData({ ...formData, ['birthdate']: e.target.value }) }}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default EditMode