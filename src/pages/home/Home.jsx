import styles from "./home.module.scss"
import {useEffect, useState} from "react";


const Home = () => {
    const tg = window.Telegram.WebApp;
    const [username, setUsername] = useState('');
    useEffect(() => {
        tg.ready();
        const user = tg.initDataUnsafe?.user;
        if (user && user.username) {
            setUsername(user.username);
        } else {
            setUsername("Guest");
        }
    }, []);

    return (
        <div className={styles.container}>
            {username}
        </div>
    )
}

export default Home