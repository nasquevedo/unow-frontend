import { Row, Col } from 'react-bootstrap'

const InfoMode = ({ user }) => {
    return (
        <Row>
            <Col xs="6">
                <h6>Email</h6>
                <p>{ user.email }</p>
            </Col>
            <Col xs="6">
                <h6>Postition</h6>
                <p>{ user.position}</p>
            </Col>
            <Col xs="6">
                <h6>Name</h6>
                <p>{ user.name }</p>
            </Col>
            <Col xs="6">
                <h6>Last Name</h6>
                <p>{ user.lastName }</p>
            </Col>
            <Col xs="6">
                <h6>Birthdate</h6>
                <p>{user.birthdate}</p>
            </Col>
        </Row>
    )
}

export default InfoMode