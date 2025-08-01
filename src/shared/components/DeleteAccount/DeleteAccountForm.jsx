import { useDispatch } from "react-redux"
import { DeleteAccount } from "../../services/DeleteAccount"
import ProfileContainer from "../ProfileContainer/ProfileContainer"
import { Row, Col, Button } from 'react-bootstrap'
import { unset } from "../../user/userSlice"
import { Navigate } from "react-router-dom"

const DeleteAccountForm = ({ token }) => {
    const dispatch = useDispatch()
    const destroy = async () => {
        const response = await DeleteAccount(token)

        if (response) {
            dispatch( unset())
            return <Navigate to="/"></Navigate>
        }
    }

    return (
        <ProfileContainer>
            <Row>
                <Col xs="12">
                    <h2>Delete Account</h2>
                    <p>If you delete your account, we won't be able to recover your information, are you sure?</p>
                </Col>
                <Col xs="12">
                    <div className="text-end">
                        <Button type="button" variant="danger" onClick={destroy}>Delete Account</Button>
                    </div>                
                </Col>
            </Row>
        </ProfileContainer>
    )
}

export default DeleteAccountForm