import { useState } from 'react' 
import { useSelector } from "react-redux"
import { UserContext } from "../context/UserContext"
import AdminForm from "../components/AdminForm/AdminForm"
import { Container, Row, Col } from 'react-bootstrap'
import TableEmployees from '../components/Table/Table'

const Dashboard = () => {
    const [ user, setUser ] = useState({
        id: '',
        email: '',
        name: '',
        lastName: '',
        position: '',
        birthdate: ''
    })
    
    const { roles } = useSelector((state) => state.user)

    if (roles[0] !== 'ROLE_ADMIN')
        return <h1>403 Unauthorized</h1> 
    
    return (
    <UserContext.Provider value={user}>
        <Container>
            <Row>
                <Col xs="4">
                <h3 className="text-center">{ user.id !== '' ? 'Edit' : 'Create' } Employee</h3>
                    <AdminForm setUser={setUser} />
                </Col>
                <Col xs="8">
                    <h3 className="text-center">List of Employees</h3>
                    <TableEmployees setUser={setUser} />
                </Col>
            </Row>
        </Container>
    </UserContext.Provider>
    )
}

export default Dashboard