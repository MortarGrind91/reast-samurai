import React from 'react';
import s from './../Friends.module.css';

const FriendsItem = (props) => {
  return (
    <div className={s.friendItem}>
      <div className={s.friendItemImage}>
        <img src={props.userPhoto}></img>
      </div>
      <div className={s.friendItemName}>{props.userName}</div>
    </div>
  )
}

export default FriendsItem;