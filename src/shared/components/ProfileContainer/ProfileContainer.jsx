import styles from './ProfileContainer.module.css'

const ProfileContainer = ({ children }) => {
    return (
        <div className={styles['profile-container']}>
            {children}
        </div>
    )
}

export default ProfileContainer