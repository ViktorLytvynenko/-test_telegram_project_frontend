import {useEffect} from 'react';
import instance from "../../assets/instance.js";

const BtnLogin = () => {
    useEffect(() => {
        window.onTelegramAuth = (user) => {
            console.log(user.id)
            console.log(user.first_name)
            console.log(user)
            instance.post('/data', {
                id: user.id,
                first_name: user.first_name,
                username: user.username,
                auth_date: user.auth_date,
                hash: user.hash
            })
        };

        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.async = true;
        script.setAttribute('data-telegram-login', 'RobotsWorldBot');
        script.setAttribute('data-size', 'medium');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        document.getElementById('telegram-login-container').appendChild(script);
    }, []);

    return <div id="telegram-login-container"></div>;
}

export default BtnLogin;
