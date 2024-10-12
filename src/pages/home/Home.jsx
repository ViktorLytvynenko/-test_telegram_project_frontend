import styles from "./home.module.scss"
import {useEffect, useState} from "react";



const Home = () => {
    const tg = window.Telegram.WebApp;
    const [data, setData] = useState('');
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    let user = ''

    useEffect(() => {
        tg.ready()
        user = tg.initDataUnsafe.user;
        if (user){
            setUserId(user.id);
            setUsername(user.username);
        }
        setData(tg.initDataUnsafe.user.username);
        console.log(tg.initDataUnsafe.user);
    }, [])

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>Welcome to robots world</p>
            <h1>Авторизація через Telegram</h1>
            {/*<button onClick={handleClick}>Click</button>*/}
            <h1>Username: ${data}</h1>
            <h1>Username: ${username}</h1>
            <h1>Username: ${userId}</h1>
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