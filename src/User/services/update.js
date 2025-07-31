import { useFetch } from "../../shared/hooks/useFetch"

export const Update = async (id, data, token) => {
    const updateEndpoint = `${process.env.REACT_APP_USER_UPDATE}/${id}`
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