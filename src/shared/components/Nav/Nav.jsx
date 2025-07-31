import Logout from "../Logout/Logout"
import { useSelector } from "react-redux"

const Nav = () => {
    const { token } = useSelector(state => state.user)
    const isLogged = token ?? false
    return (
        <nav>
            <h6>Unow Test!</h6>
            { isLogged && <Logout /> }
        </nav>
    )
}

export default Nav