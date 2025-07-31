import { useFetch } from '../../shared/hooks/useFetch'

export const Login = async (email, password) => {
    const loginEndpoint = process.env.REACT_APP_LOGIN_CHECK;
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: email,
            password
        })
    }

    const response = await useFetch(loginEndpoint, options)

    return response
}

export const GetUserByToken = async (token) => {
    const loginEndpoint = process.env.REACT_APP_LOGIN
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const response = await useFetch(loginEndpoint, options)

    if (response.success) {
        return response.data
    }

    return {}
}