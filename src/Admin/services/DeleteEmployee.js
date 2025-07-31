import { useFetch } from "../../shared/hooks/useFetch"


export const DeleteEmployee = async (id, token) => {
    const deleteEndpoint = `${process.env.REACT_APP_ADMIN_DELETE}/${id}`
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "appplication/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const response = await useFetch(deleteEndpoint, options)

    if (response.success) {
        return true
    }

    return false
}