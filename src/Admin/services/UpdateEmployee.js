import { useFetch } from "../../shared/hooks/useFetch"

export const UpdateEmployee = async (id, data, token) => {
    const updateEndpoint = `${process.env.REACT_APP_ADMIN_UPDATE}/${id}`
    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    const response = await useFetch(updateEndpoint, options)

    if (response.success) {
        return response.data
    }

    return {}
}