import { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import USERS from '../../USERS.json';
import styles from './UsersList.module.css';
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(USERS);
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="search"
        name="users"
        id="users_list"
        placeholder="Search by user name..."
      />
      <ul>
        {users?.map(({ id, name, username }) => (
          <SingleUser key={id} name={name} username={username} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
