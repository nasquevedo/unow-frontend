import { useEffect, useState, useContext } from "react"
import { useSelector } from "react-redux"
import { Positions } from "../../../shared/services/position"
import { CreateEmployee } from "../../services/createEmployee"
import { UserContext } from "../../context/UserContext"
import { UpdateEmployee } from "../../services/UpdateEmployee"
import { Button, Form } from "react-bootstrap"

const AdminForm = ({ setUser }) => {
    const { token } = useSelector(state => state.user)

    const userInfo = useContext(UserContext)

    const [positions, setPositions] = useState({})

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
        <Form onSubmit={submit}>
            <input type="hidden" value={userInfo.id} />
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={(e) => { setUser({ ...userInfo, ['email']: e.target.value }) }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    value={userInfo.name}
                    onChange={(e) => { setUser({ ...userInfo, ['name']: e.target.value }) }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={(e) => { setUser({ ...userInfo, ['lastName']: e.target.value }) }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Select
                    id="position"
                    name="position"
                    value={userInfo.position}
                    onChange={(e) => { setUser({ ...userInfo, ['position']: e.target.value }) }}
                >
                    <option value="">Seleccionar</option>
                    {positions.length > 0 &&
                        positions.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthdate</Form.Label>
                <Form.Control
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={userInfo.birthdate}
                    onChange={(e) => { setUser({ ...userInfo, ['birthdate']: e.target.value }) }}
                />
            </Form.Group>
            <Button variant="light" type="button" onClick={clear}>Cancel</Button>
            <Button variant="success" type="submit">Save</Button>
        </Form>
    )
}

export default AdminForm