import { useEffect, useMemo, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import styles from './UsersList.module.css';
import { API_URL_USERS } from '../../constants';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredUsers = (searchInput) => {
    return users.filter(({ name }) =>
      name.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
  };
  const memoizedUsers = useMemo(() => getFilteredUsers(searchTerm), [
    searchTerm,
    users,
  ]);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL_USERS)
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setUsers(res);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Users List</h1>
      <input
        className={styles.userInput}
        type="search"
        autoFocus
        name="users"
        id="users_list"
        placeholder="Search by user name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className={styles.listContainer}>
        {loading ? <div>Loading ...</div> : null}
        {!loading && memoizedUsers.length === 0 ? (
          <div>No users found</div>
        ) : (
          memoizedUsers.map(({ id, name, username }) => (
            <SingleUser key={id} name={name} username={username} />
          ))
        )}
      </ul>
    </div>
  );
}

export default UsersList;
