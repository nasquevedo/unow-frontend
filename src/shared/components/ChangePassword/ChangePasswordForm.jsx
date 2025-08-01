import { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { ChangePassword } from '../../services/ChangePassword'
import { useDispatch } from 'react-redux'
import { unset } from '../../user/userSlice'
import { Navigate } from 'react-router-dom'

const ChangePasswordForm = ({ token }) => {
    const dispatch = useDispatch()
    const [ password, setPassword ] = useState("")
    const [ newPassword, setNewPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    const submit = async (e) => {
        e.preventDefault()

        const response = await ChangePassword(token, password, newPassword)
        console.log(response);
        if (response) {
            dispatch( unset() )
            return <Navigate to="/"></Navigate>
        }
    }

    return (
        <Form onSubmit={submit}>
            <Form.Group>
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                    type="password"
                    id="current-password"
                    name="current-password"
                    onChange={ (e) => {setPassword(e.target.value)} }
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type="password"
                    id="new-password"
                    name="new-password"
                    onChange={ (e) => {setNewPassword(e.target.value)} }
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    onChange={ (e) => {setConfirmPassword(e.target.value)} }
                />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">Change</Button>
        </Form>
    )
}

export default ChangePasswordForm