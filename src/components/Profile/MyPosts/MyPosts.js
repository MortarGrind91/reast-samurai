import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.post} key={p.id} count={p.likesCount} avatar={p.image} />);
    
  let onAddPost = () => {
    props.addPost();
  }
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={s.posts}>
        <h3>My posts</h3>
        <div>
          <textarea placeholder="Сообщение" 
          onChange={onPostChange}  value={props.newPostText}/>
        </div>
        <div>
          <button className={s.add_post} onClick={onAddPost}>add post</button>
        </div>
        {postElements}
      </div>
      <hr />
      <div>Посмотрел 67 уроков</div>
    </div>
  )
}

export default MyPosts;