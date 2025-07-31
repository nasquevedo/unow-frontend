import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ children }) => {
    const { token } = useSelector((state) => state.user)

    const isLogged = token ?? false

    if (!isLogged) {
        return <Navigate to="/"></Navigate>
    }

    return children
}

export default ProtectedRoute