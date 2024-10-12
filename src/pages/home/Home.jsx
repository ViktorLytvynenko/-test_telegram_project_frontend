import styles from "./home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState('');
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (tg) {
            tg.ready(); // Ensure Telegram WebApp is initialized

            const user = tg.initDataUnsafe?.user;
            if (user) {
                setUserId(user.id);
                setUsername(user.username || "No username");
                setData(user.first_name || "Anonymous");
            }

            console.log(user); // Debugging
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
