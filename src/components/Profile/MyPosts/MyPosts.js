import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state'

const MyPosts = (props) => {
  let postElements = props.posts.
    map(p => <Post message={p.post} count={p.likesCount} avatar={p.image} />);

  let newPostElement = React.createRef();
    
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div>
      <div className={s.posts}>
        <h3>My posts</h3>
        <div>
          <textarea placeholder="Сообщение" ref={newPostElement} 
          onChange={onPostChange}  value={props.newPostText}/>
        </div>
        <div>
          <button className={s.add_post} onClick={addPost}>add post</button>
        </div>
        {postElements}
      </div>
      <hr />
      <div>Посмотрел 40 уроков</div>
    </div>
  )
}

export default MyPosts;