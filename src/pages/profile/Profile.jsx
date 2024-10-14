import React, { useEffect, useState } from "react";
import instance from "../../assets/instance.js";
import styles from "../home/home.module.scss";

const Profile = () => {
    const id = localStorage.getItem('id');

    const [userData, setUserData] = useState({
        id: '',
        telegramId: '',
        firstName: '',
        username: '',
        authDate: '',
        hash: '',
        phoneNumber: '',
        createDate: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) {
                setError("User ID not found in localStorage");
                setLoading(false);
                return;
            }

            try {
                const response = await instance.get(`user/${id}`);
                const userData = response.data || {};

                setUserData({
                    id: userData.id || '',
                    telegramId: userData.telegram_id || '',
                    firstName: userData.first_name || '',
                    username: userData.username || '',
                    authDate: userData.auth_date || '',
                    hash: userData.hash || '',
                    phoneNumber: userData.phone_number || '',
                    createDate: userData.create_date || '',
                });

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_c1}>
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{userData.id}</td>
                    </tr>
                    <tr>
                        <th>Telegram ID</th>
                        <td>{userData.telegramId}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{userData.firstName}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{userData.username}</td>
                    </tr>
                    <tr>
                        <th>Auth Date</th>
                        <td>{userData.authDate || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Hash</th>
                        <td>{userData.hash}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{userData.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Create Date</th>
                        <td>{userData.createDate || 'N/A'}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;
