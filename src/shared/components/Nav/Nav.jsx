import { Col, Row, Navbar, NavDropdown } from "react-bootstrap"
import Logout from "../Logout/Logout"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Nav = () => {
    const { token, roles, name, lastName } = useSelector(state => state.user)
    const isLogged = token ?? false
    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-between" data-bs-theme="dark">
            <Navbar.Brand>Unow Test!</Navbar.Brand>
            { isLogged &&
                <Row>
                    <Col xs="auto">
                        {roles[0] === 'ROLE_USER' && 
                            <NavDropdown style={{ color: 'white' }} title={`${name} ${lastName}`} id="basic-nav-dropdown"> 
                                <Link className="navdropdowm-item" to="/change-password">Change password</Link>
                                <NavDropdown.Divider />
                                <Link to="/delete-account">Delete Account</Link>
                            </NavDropdown>
                        }
                    </Col>
                    <Col xs="auto">
                        <Logout /> 
                    </Col> 
                </Row>
            }
        </Navbar>
    )
}

export default Nav