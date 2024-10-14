import React, { useEffect, useState } from "react";
import instance from "../../assets/instance.js";
import styles from "../home/home.module.scss";

const Profile = () => {
    const id = localStorage.getItem('id');
    const [userId, setUserId] = useState('');
    const [telegramId, setTelegramId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [authDate, setAuthDate] = useState('');
    const [hash, setHash] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [createDate, setCreateDate] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) {
                console.error("User ID not found in localStorage");
            }

            try {
                const response = await instance.get(`user/${id}`);
                if (!response.data) {
                    console.log("User data not found.")
                }

                const userData = response.data;

                setUserId(userData.id);
                setTelegramId(userData.telegram_id);
                setFirstName(userData.first_name);
                setUsername(userData.username);
                setAuthDate(userData.auth_date);
                setHash(userData.hash);
                setPhoneNumber(userData.phone_number);
                setCreateDate(userData.create_date);

            } catch (error) {
                setError(error);
            }
        };

        fetchUser();
    }, [id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (userId === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_c1}>
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{userId}</td>
                    </tr>
                    <tr>
                        <th>Telegram ID</th>
                        <td>{telegramId}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <th>Auth Date</th>
                        <td>{authDate}</td>
                    </tr>
                    <tr>
                        <th>Hash</th>
                        <td>{hash}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Create Date</th>
                        <td>{(createDate)}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;
