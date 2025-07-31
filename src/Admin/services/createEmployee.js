import { useFetch } from "../../shared/hooks/useFetch"

export const CreateEmployee = async (data, token) => {
    const createEndpoint = process.env.REACT_APP_ADMIN_CREATE
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    const response = await useFetch(createEndpoint, options)

    if (response.success) { 
        return response.data
    } 

    return {}
}