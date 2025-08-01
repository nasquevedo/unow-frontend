import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { Employees } from '../../services/employees'
import Actions from '../Actions/Actions'
import { Table } from 'react-bootstrap'

const TableEmployees = ({ setUser }) => {
    const { token } = useSelector(state => state.user)

    
    const [ employees, setEmployees ] = useState({}) 

    useEffect(() => {
        const getEmployees = async (token) => {
           const response = await Employees(token) 

           setEmployees(response)
        }

        getEmployees(token)
    }, [token])

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Birthdate</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.length === 0 && <tr><td colSpan="6">There's any user yet</td></tr>}
                {employees.length > 0 && 
                    employees.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.position}</td>
                                <td>{item.birthdate.date.split(" ")[0]}</td>
                                <th><Actions id={item.id} setUser={setUser} token={token} /></th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default TableEmployees