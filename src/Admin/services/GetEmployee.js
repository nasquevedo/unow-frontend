import { useFetch } from "../../shared/hooks/useFetch"

export const GetEmployee = async (id, token) => {
    const editEndpoint = `${process.env.REACT_APP_ADMIN_FIND_BY_ID}/${id}`
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const response = await useFetch(editEndpoint, options)

    if (response.success) {
        return response.data
    }

    return {}
}