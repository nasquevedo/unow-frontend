import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set, setUser } from '../../../shared/user/userSlice'
import { Login, GetUserByToken } from '../../services/login'
import { Navigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const LoginForm = () => {
    const dispatch = useDispatch()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await Login(email, password);

        if (response.token) {
            dispatch( set(response) )
            const result = await GetUserByToken(response.token)

            if (result) {
                dispatch(setUser(result))
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Welcome!</h2>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={ email }
                    required 
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={ password }
                    required 
                />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" className="w-100" type="submit">Login</Button>
            </Form.Group>
        </Form>
    )
}

export default LoginForm