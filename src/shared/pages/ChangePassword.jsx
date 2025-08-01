import { useSelector } from "react-redux"
import ChangePasswordForm from "../components/ChangePassword/ChangePasswordForm"
import MainContainer from "../components/MainContainer/MainContainer"

const ChangePassword = () => {
    const {token} = useSelector(state => state.user)
    return (
        <MainContainer>
            <ChangePasswordForm  token={token}/>
        </MainContainer>
    )
}

export default ChangePassword