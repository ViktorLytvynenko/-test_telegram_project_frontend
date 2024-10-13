import styles from "./home.module.scss"
import BtnLogin from "../../components/btnLogin/BtnLogin.jsx";


const Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_c1}>
                <p className={styles.container_c1_title}>Welcome to robots world</p>
                <p className={styles.container_c1_body}>Join us!</p>
                <BtnLogin/>
            </div>
        </div>
    )
}

export default Home