import { useState } from 'react' 
import { useSelector } from "react-redux"
import { UserContext } from "../context/UserContext"
import AdminForm from "../components/AdminForm/AdminForm"
import Table from "../components/Table/Table"

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
        <div>
            <AdminForm setUser={setUser} />
        </div>
        <div>
            <h1>List of Users</h1>
            <Table setUser={setUser} />
        </div>
    </UserContext.Provider>
    )
}

export default Dashboard