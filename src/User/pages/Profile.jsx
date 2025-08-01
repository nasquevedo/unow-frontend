import { useState } from 'react'
import { useSelector } from "react-redux"
import InfoMode from "../components/Profile/InfoMode"
import EditMode from '../components/Profile/EditMode'
import { Row, Col } from 'react-bootstrap'
import styles from './Profile.module.css'

const Profile = () => {
    const [ editMode, setEditMode ] = useState(false)
    const user = useSelector(state => state.user)

    const edit = () => {
        setEditMode(true)
    }

    const cancel = () => {
        setEditMode(false)
    }

    return (
        <div className={styles['profile-container']}>
            <h2 className="text-center">Informacion del usuario</h2>
            <Row>
                {!editMode && <i className="bi bi-pencil-fill text-end" onClick={edit}></i>}
                {editMode && <i className="bi bi-x-circle-fill text-end" onClick={cancel}></i>}
            </Row>
            <Row>
            { !editMode &&
                <Col xs="12">
                    <InfoMode user={user} />
                </Col>
            }
            { editMode && 
                <Col xs="12">
                    <EditMode user={user} />
                </Col> 
            }
            </Row>
        </div>
    )
}

export default Profile