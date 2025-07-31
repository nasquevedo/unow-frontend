import { Link } from "react-router-dom"
import RegisterForm from "../components/Register/RegisterForm"

const Register = () => {
    return (
        <div>
            <RegisterForm />
            <Link to="/">Are you already have an account?</Link>
        </div>
    )
}

export default Register