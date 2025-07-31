import { Link } from "react-router-dom"
import LoginForm from "../components/Login/LoginForm"

const Login = () => {
    return (
        <div>
            <LoginForm />
            <Link to="/register">Create an account</Link>
        </div>
    )
}

export default Login