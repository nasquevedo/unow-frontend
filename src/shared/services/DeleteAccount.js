import { useFetch } from "../hooks/useFetch"

export const DeleteAccount = async (token) => {
    const deleteEndpoint = process.env.REACT_APP_USER_DELETE_ACCOUNT
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const response = await useFetch(deleteEndpoint, options)

    return response.success ?? false
}