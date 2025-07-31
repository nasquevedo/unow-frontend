const InfoMode = ({ user }) => {
    return (
        <>
            <div>
                <h6>Email</h6>
                <p>{ user.email }</p>
            </div>
            <div>
                <h6>Postition</h6>
                <p>{ user.position}</p>
            </div>
            <div>
                <h6>Name</h6>
                <p>{ user.name }</p>
            </div>
            <div>
                <h6>Last Name</h6>
                <p>{ user.lastName }</p>
            </div>
            <div>
                <h6>Birthdate</h6>
                <p>{user.birthdate}</p>
            </div>
        </>
    )
}

export default InfoMode