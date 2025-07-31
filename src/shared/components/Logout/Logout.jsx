import { useDispatch } from "react-redux"
import { unset } from "../../user/userSlice"
import { Navigate } from "react-router-dom"

const Logout = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(unset())

        return <Navigate to="/"></Navigate>
    }

    return (
        <button 
            type="button"
            onClick={logout}
        >
            Logout
        </button>
    )
}

export default Logout