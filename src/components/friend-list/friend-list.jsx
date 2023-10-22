import styles from './friends.module.css';
import { FriendListItem } from './friend-list-item';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};
