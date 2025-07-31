import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set, setUser } from '../../../shared/user/userSlice'
import { Login, GetUserByToken } from '../../services/login'
import { Navigate } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={ email }
                    required 
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={ password }
                    required 
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm