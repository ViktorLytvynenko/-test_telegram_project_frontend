import styles from "./home.module.scss";
import BtnLogin from "../../components/btnLogin/BtnLogin.jsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const id = localStorage.getItem('id');
    const navigate = useNavigate();

    const handleUserPage = () => {
        navigate('/profile');
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_c1}>
                {id ? (
                    <>
                        <p className={styles.container_c1_title}>Welcome back!</p>
                        <button onClick={handleUserPage} className={styles.container_c1_btn}>Go to Profile</button>
                    </>
                ) : (
                    <div className={styles.container_c1}>
                        <p className={styles.container_c1_title}>Welcome to robots world</p>
                        <p className={styles.container_c1_body}>Join us!</p>
                        <BtnLogin/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
