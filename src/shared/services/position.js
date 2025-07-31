import { useFetch } from "../hooks/useFetch"

export const Positions = async () => {
    const positionEndpoint = process.env.REACT_APP_API_POSITIONS
    const options = {
        method: "GET"
    }
    const response = await useFetch(positionEndpoint, options)

    return response.positions
}