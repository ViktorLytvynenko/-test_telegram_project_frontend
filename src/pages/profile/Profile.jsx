import React, { useEffect, useState } from "react";
import instance from "../../assets/instance.js";

const Profile = () => {
    const id = localStorage.getItem('id');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await instance.get(`user/${id}`);
                setUser(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {error && <div>Error: {error.message}</div>}
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <td>{user.id}</td>
                </tr>
                <tr>
                    <th>Telegram ID</th>
                    <td>{user.telegram_id}</td>
                </tr>
                <tr>
                    <th>First Name</th>
                    <td>{user.first_name}</td>
                </tr>
                <tr>
                    <th>Username</th>
                    <td>{user.username}</td>
                </tr>
                <tr>
                    <th>Auth Date</th>
                    <td>{user.auth_date ? new Date(user.auth_date).toLocaleString() : 'N/A'}</td>
                </tr>
                <tr>
                    <th>Hash</th>
                    <td>{user.hash}</td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <td>{user.phone_number}</td>
                </tr>
                <tr>
                    <th>Create Date</th>
                    <td>{new Date(user.create_date).toLocaleString()}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default Profile;
