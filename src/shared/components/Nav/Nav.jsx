import { Col, Navbar } from "react-bootstrap"
import Logout from "../Logout/Logout"
import { useSelector } from "react-redux"

const Nav = () => {
    const { token } = useSelector(state => state.user)
    const isLogged = token ?? false
    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-between" data-bs-theme="dark">
            <Navbar.Brand>Unow Test!</Navbar.Brand>
            { isLogged &&
                <Col xs="auto">
                    <Logout /> 
                </Col> 
            }
        </Navbar>
    )
}

export default Nav