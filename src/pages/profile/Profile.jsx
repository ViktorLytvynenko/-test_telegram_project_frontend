import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUser} from "../../redux/slices/users.js";

import styles from "../home/home.module.scss";

const Profile = () => {
    const id = localStorage.getItem('id');
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        if (id) {
            dispatch(fetchUser(id));
        }
    }, [dispatch, id]);

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
                        <td>{user.auth_date}</td>
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
                        <td>{user.create_date}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;