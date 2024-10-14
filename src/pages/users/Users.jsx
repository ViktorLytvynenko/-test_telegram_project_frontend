import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../redux/slices/users';
import styles from "./users.module.scss"

const Users = () => {
    const dispatch = useDispatch();
    const {userList, loading, error} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers({currentPage: 1, limit: 10}))
            .unwrap()
    }, [dispatch]);
    console.log(userList.users)
    const users = Array.isArray(userList.users) ? userList.users : [];

    return (
        <div className={styles.container}>
            <div className={styles.container_c1}>
                <p className={styles.container_c1_title}>Users</p>
                {loading && <p>Loading users...</p>}
                {error && <p>Error fetching users: {error}</p>}
                {users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Telegram ID</th>
                            <th>First Name</th>
                            <th>Username</th>
                            <th>Auth Date</th>
                            <th>Hash</th>
                            <th>Phone Number</th>
                            <th>Create Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.telegram_id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.username}</td>
                                <td>{user.auth_date}</td>
                                <td>{user.hash}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.create_date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Users;
