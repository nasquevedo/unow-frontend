import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../shared/user/userSlice'
import { Positions } from '../../../shared/services/position'
import { Update } from '../../services/update'
import { Row, Form, Col, Button } from 'react-bootstrap'

const EditMode = ({ user }) => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: user.name,
        lastName: user.lastName,
        position: user.position,
        birthdate: user.birthdate
    })
    const [positions, setPositions] = useState({})
    const [loading, setLoading] = useState(false)

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
        <Form onSubmit={submit}>
            {loading && <span>Loading ... </span>}
            <Row>
                <Col xs="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        disabled
                    />
                </Col>
                <Col xs="6">
                    <Form.Label>Postition</Form.Label>
                    <Form.Select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={(e) => { setFormData({ ...formData, ['position']: e.target.value }) }}
                    >
                        {positions.length > 0 &&
                            positions.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </Form.Select>
                </Col>
                <Col xs="6">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, ['name']: e.target.value }) }}
                    />
                </Col>
                <Col xs="6">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => { setFormData({ ...formData, ['lastName']: e.target.value }) }}
                    />
                </Col>
                <Col xs="6">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        value={formData.birthdate.split(" ")[0]}
                        onChange={(e) => { setFormData({ ...formData, ['birthdate']: e.target.value }) }}
                    />
                </Col>
            </Row>
            <Button type="submit" variant="success">Save</Button>
        </Form>
    )
}

export default EditMode