import {useEffect} from 'react';

const BtnLogin = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.async = true;
        script.setAttribute('data-telegram-login', 'RobotsWorldBot');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        document.getElementById('telegram-login').appendChild(script);
        console.log('btn login')
    }, []);

    window.onTelegramAuth = (user) => {
        alert(
            `Logged in as ${user.first_name} ${user.last_name || ''} (ID: ${user.id}${
                user.username ? `, @${user.username}` : ''
            })`
        );
    };

    return <div id="telegram-login"></div>;
};

export default BtnLogin;
