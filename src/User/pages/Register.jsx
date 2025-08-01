import { Link } from "react-router-dom"
import RegisterForm from "../components/Register/RegisterForm"
import MainContainer from "../../shared/components/MainContainer/MainContainer"

const Register = () => {
    return (
        <MainContainer>
            <RegisterForm />
            <Link className="text-center" to="/">Are you already have an account?</Link>
        </MainContainer>
    )
}

export default Register