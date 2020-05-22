import React from 'react';
import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
  let friendsItemElement = props.state.friends.map(
      item => <FriendsItem userName={item.name} userPhoto={item.photo}/>);
  return(
    <div className={s.friendsBlock}>
      <div className={s.friendsTitle}>Friends</div>
      <div className={s.friendsBox}>
        {friendsItemElement}
      </div>
    </div>
  )
}

export default Friends;