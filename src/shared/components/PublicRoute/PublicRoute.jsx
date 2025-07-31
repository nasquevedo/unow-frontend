import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { pages } from "../../enum/pages"

const PublicRoute = ({ children }) => {
    const { token, roles } = useSelector((state) => state.user)

    const isLogged = token ?? false

    if (isLogged) {
        const role = roles[0]
        return <Navigate to={pages[role]}></Navigate>
    }

    return children
}

export default PublicRoute