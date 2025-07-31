import { useState } from 'react'
import { Register } from '../../services/register'
import { Navigate } from 'react-router-dom'

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
        if (response.success) {
            return <Navigate to="/"></Navigate>
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    onChange={(e) => { setFormData({ ...formData, ['name']: e.target.value}) }}
                    value={formData.name} 
                />
            </div>
            <div>
                <label>Last name</label>
                <input 
                    type="text" 
                    name="lastName"
                    onChange={(e) => { setFormData({ ...formData, ['lastName']: e.target.value}) }}
                    value={formData.lastName}
                />
            </div>
            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    name="email"
                    onChange={(e) => { setFormData({ ...formData, ['email']: e.target.value })}}
                    value={formData.email}
                />
            </div>
            <div>
                <label>password</label>
                <input 
                    type="password" 
                    name="password"
                    onChange={(e) => { setFormData({ ...formData, ['password']: e.target.value })}}
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input 
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => { setFormData({ ...formData, ['confirmPassword']: e.target.value}) }}
                />
            </div>
            <button>Register</button>
        </form>
    )
}

export default RegisterForm