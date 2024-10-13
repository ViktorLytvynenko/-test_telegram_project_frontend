import styles from "./home.module.scss"
import BtnLogin from "../../components/btnLogin/BtnLogin.jsx";


const Home = () => {

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>Welcome to robots world</p>
            <BtnLogin/>
        </div>
    )
}

export default Home