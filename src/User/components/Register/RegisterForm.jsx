import { useState } from 'react'
import { Register } from '../../services/register'
import { Navigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const RegisterForm = () => {
    const [ formData, setFormData ] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        position: "",
        birthdate: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await Register(formData)
        if (response) {
            return <Navigate to="/"></Navigate>
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Create Your Account!</h2>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text"
                    name="name"
                    onChange={(e) => { setFormData({ ...formData, ['name']: e.target.value}) }}
                    value={formData.name} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="lastName"
                    onChange={(e) => { setFormData({ ...formData, ['lastName']: e.target.value}) }}
                    value={formData.lastName}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email"
                    onChange={(e) => { setFormData({ ...formData, ['email']: e.target.value })}}
                    value={formData.email}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control 
                    type="password" 
                    name="password"
                    onChange={(e) => { setFormData({ ...formData, ['password']: e.target.value })}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => { setFormData({ ...formData, ['confirmPassword']: e.target.value}) }}
                />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">Register</Button>
        </Form>
    )
}

export default RegisterForm