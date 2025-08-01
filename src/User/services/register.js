import { useFetch } from '../../shared/hooks/useFetch'

export const Register = async (formData) => {
    const registerEndpoint = process.env.REACT_APP_REGISTER;
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    const response = await useFetch(registerEndpoint, options)

    return response.success ?? false
}