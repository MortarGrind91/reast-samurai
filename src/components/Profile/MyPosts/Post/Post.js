import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.item__image}>
        <img src={props.avatar} alt="image" />
      </div>
      {props.message}
      <div>
        <span>Like {props.count}</span>
      </div>
    </div>
  )
}

export default Post;