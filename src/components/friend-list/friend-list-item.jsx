import clsx from 'clsx';
import styles from './friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span
        className={clsx(styles.status, {
          [styles.green]: isOnline,
          [styles.red]: !isOnline,
        })}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
