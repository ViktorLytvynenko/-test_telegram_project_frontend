import styles from "./home.module.scss"
import {useEffect, useState} from "react";

const tg = window.Telegram.WebApp;
const Home = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        setData(tg.initDataUnsafe.data.username);
        console.log(tg.initDataUnsafe)
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>Welcome to robots world</p>
            <h1>Авторизація через Telegram</h1>
            <h1>Username: ${data}</h1>
            {/*<script async src="https://telegram.org/js/telegram-widget.js?7"*/}
            {/*        data-telegram-login="RobotsWorldBot"*/}
            {/*        data-size="large"*/}
            {/*        data-radius="10"*/}
            {/*        data-auth-url="домен добавить бека!"*/}
            {/*        data-color="#0088cc"*/}
            {/*        data-prompt="true">*/}
            {/*</script>*/}
            {/*<div id="telegram-widget-container"></div>*/}
        </div>
    )
}

export default Home