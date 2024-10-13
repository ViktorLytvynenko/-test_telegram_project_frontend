import styles from "./home.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import BtnLogin from "../../components/btnLogin/btnLogin.jsx";


const Home = () => {
    const tg = window.Telegram.WebApp;
    const [username, setUsername] = useState('');

    const openTelegramBot = () => {
        window.open('https://t.me/RobotsWorldBot', '_blank');
    };

    const test = () => {
        axios.post("https://oauth.telegram.org/auth?bot_id=547043436&origin=https%3A%2F%2Fcore.telegram.org&embed=1&request_access=write&return_to=https%3A%2F%2Fcore.telegram.org%2Fwidgets%2Flogin",
            {})
    }

    useEffect(() => {
        tg.ready();
        const user = tg.initDataUnsafe?.user;
        if (user && user.username) {
            // post request
            setUsername(user.username);
        } else {
            setUsername("Guest");
        }
    }, []);

    return (
        <div className={styles.container}>
            {username}
            <a href='https://oauth.telegram.org/auth?bot_id=547043436&origin=https%3A%2F%2Fcore.telegram.org&embed=1&request_access=write&return_to=https%3A%2F%2Fcore.telegram.org%2Fwidgets%2Flogin'>test</a>
            <button onClick={() => test()}/>

            <BtnLogin/>

            <div>
                <div id="telegram-login"></div>
                <button onClick={openTelegramBot} style={{marginTop: '10px'}}>
                    Open Telegram Bot
                </button>
            </div>
        </div>
    )
}

export default Home