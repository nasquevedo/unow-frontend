import { useState } from 'react'
import { useSelector } from "react-redux"
import InfoMode from "../components/Profile/InfoMode"
import EditMode from '../components/Profile/EditMode'

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
        <div>
            <h1>Informacion del usuario</h1>
            { !editMode &&
                <div>
                    <InfoMode user={user} />
                    <button type="button" onClick={edit}>Edit</button>
                </div>
            }
            { editMode && 
                <div>
                    <EditMode user={user} />
                    <button type="button" onClick={cancel}>Cancel</button>
                </div> }
            
        </div>
    )
}

export default Profile