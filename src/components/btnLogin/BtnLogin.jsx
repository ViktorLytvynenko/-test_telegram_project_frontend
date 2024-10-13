import {useEffect} from 'react';

const BtnLogin = () => {
    useEffect(() => {
        window.onTelegramAuth = (user) => {
            alert(
                `Logged in as ${user.first_name} ${user.last_name} (ID: ${user.id}${
                    user.username ? `, @${user.username}` : ''
                })`
            );
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
