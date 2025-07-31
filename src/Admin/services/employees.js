import { useFetch } from "../../shared/hooks/useFetch"

export const Employees = async (token) => {
    const employeesEndpoint = process.env.REACT_APP_ADMIN_EMPLOYEES
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const response = await useFetch(employeesEndpoint, options) 


    return response.data
}