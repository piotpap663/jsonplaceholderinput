import styles from './SingleUser.module.css';

function SingleUser({ id, name, username }) {
  return (
    <li key={id} className={styles.singleUser}>
      {`${name} `}
      <span className={styles.username}>{`@${username}`}</span>
    </li>
  );
}

export default SingleUser;
