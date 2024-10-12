import styles from "./home.module.scss";
import { useEffect, useState } from "react";

const tg = window.Telegram?.WebApp;

const Home = () => {
    const [data, setData] = useState('');
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (tg) {
            tg.ready();
            const user = tg.initDataUnsafe?.user;
            if (user) {
                setUserId(user.id);
                setUsername(user.username);
                setData(user.username);
            }
            console.log(user);
        }
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>Welcome to robots world</p>
            <h1>Авторизація через Telegram</h1>
            <h1>Username: {data}</h1>
            <h1>User ID: {userId}</h1>
            <h1>Username: {username}</h1>
        </div>
    );
};

export default Home;
