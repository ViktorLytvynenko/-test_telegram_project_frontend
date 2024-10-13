// TelegramLogin.jsx
import React, { useEffect, useState } from 'react';

const BOT_USERNAME = 'RobotsWorldBot'; // Укажите имя вашего бота
const BOT_TOKEN = '7633142965:AAE8zHTYJJT_r6L40-NO2ly0BDLWDghGLpg'; // Укажите токен бота

const TelegramLogin = () => {
    const [user, setUser] = useState(null);

    // Функция для проверки данных Telegram
    const checkTelegramAuthorization = (authData) => {
        const checkHash = authData.hash;
        delete authData.hash;

        const dataCheckArr = Object.entries(authData)
            .map(([key, value]) => `${key}=${value}`)
            .sort();
        const dataCheckString = dataCheckArr.join('\n');
        const secretKey = crypto.subtle.digest('SHA-256', new TextEncoder().encode(BOT_TOKEN));

        return secretKey.then((key) => {
            return crypto.subtle
                .importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
                .then((importedKey) =>
                    crypto.subtle.sign('HMAC', importedKey, new TextEncoder().encode(dataCheckString))
                )
                .then((signature) => {
                    const hash = Array.from(new Uint8Array(signature))
                        .map((b) => b.toString(16).padStart(2, '0'))
                        .join('');
                    if (hash !== checkHash) throw new Error('Data is NOT from Telegram');
                    return authData;
                });
        });
    };

    // Функция для входа через Telegram
    const onTelegramAuth = (authData) => {
        checkTelegramAuthorization(authData)
            .then((verifiedData) => {
                localStorage.setItem('tg_user', JSON.stringify(verifiedData));
                setUser(verifiedData);
            })
            .catch((error) => alert(error.message));
    };

    // Функция для выхода
    const logout = () => {
        localStorage.removeItem('tg_user');
        setUser(null);
    };

    // Загружаем виджет Telegram при первом рендере
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.async = true;
        script.setAttribute('data-telegram-login', BOT_USERNAME);
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        document.getElementById('telegram-login').appendChild(script);

        // Проверка на наличие сохраненного пользователя
        const storedUser = localStorage.getItem('tg_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        // Добавляем функцию в глобальную область видимости
        window.onTelegramAuth = onTelegramAuth;
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {user ? (
                <div>
                    <h1>
                        Hello,{' '}
                        <a href={`https://t.me/${user.username}`} target="_blank" rel="noopener noreferrer">
                            {user.first_name} {user.last_name || ''}
                        </a>
                        !
                    </h1>
                    {user.photo_url && <img src={user.photo_url} alt="User Avatar" />}
                    <p>
                        <button onClick={logout} style={{ marginTop: '20px' }}>
                            Log out
                        </button>
                    </p>
                </div>
            ) : (
                <div id="telegram-login"></div>
            )}
        </div>
    );
};

export default TelegramLogin;
