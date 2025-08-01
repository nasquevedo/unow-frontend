import { useSelector } from "react-redux"
import DeleteAccountForm from "../components/DeleteAccount/DeleteAccountForm"

const DeleteAccount = () => {
    const { token } = useSelector(state => state.user)
    return (
        <DeleteAccountForm token={token} />
    )
}

export default DeleteAccount