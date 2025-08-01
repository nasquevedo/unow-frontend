import styles from './MainContainer.module.css'

const MainContainer = ({ children }) => {
    return (
        <div className={styles['main-container']}>
            { children }
        </div>
    )
}

export default MainContainer