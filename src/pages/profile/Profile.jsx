import {useEffect} from "react";

const Profile = () => {
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/api/users/${userId}`); // Замените на ваш URL API
                setUser(response.data);
            } catch (error) {
                setError('Ошибка при получении данных пользователя');
                console.error('Ошибка:', error);
            }
        };

        fetchUser();
    }, [userId]);
    return (
        <>
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
