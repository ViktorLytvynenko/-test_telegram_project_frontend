// src/components/TelegramLogin.jsx
import { useEffect } from 'react';

function TelegramLogin() {
    // This effect runs once when the component mounts
    useEffect(() => {
        const handleAuth = (user) => {
            alert(
                `Logged in as ${user.first_name} ${user.last_name} (ID: ${user.id}${
                    user.username ? `, @${user.username}` : ''
                })`
            );
        };

        // Expose the callback globally (required for Telegram widget)
        window.onTelegramAuth = handleAuth;

        // Load the Telegram login widget script dynamically
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

export default TelegramLogin;
