import { useFetch } from "../hooks/useFetch"

export const ChangePassword = async (token, password, newPassword) => {
    const changePasswordEndpoint = process.env.REACT_APP_USER_CHANGE_PASSWORD
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            password,
            newPassword
        })
    }

    const response = await useFetch(changePasswordEndpoint, options)

    return response.success ?? false
}