import { Link } from "react-router-dom"
import LoginForm from "../components/Login/LoginForm"
import MainContainer from "../../shared/components/MainContainer/MainContainer"

const Login = () => {
    return (
        <MainContainer>
            <LoginForm />
            <Link className="text-center" to="/register">Create an account</Link>
        </MainContainer>
    )
}

export default Login