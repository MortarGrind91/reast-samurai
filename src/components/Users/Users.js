import React from 'react';
import s from './users.module.css';
import userPhoto from './../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesPagination = [];
  let currentPage = props.currentPage;

  for (let i = 1; i <= pagesCount; i++) {
    pagesPagination.push(i);
  }

  return (
    <div>
      <div className={s.pagination}>
        {pagesPagination.map(p => {
          return <span className={currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
        })}
      </div>
      <div className={s.userBox}>
        {props.users.map(u =>
          <div key={u.id} className={s.userItem}>
            <span>
              <NavLink to={`profile/${u.id}`}>
                <div className={s.userPhoto}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                </div>
              </NavLink>
              <div>
                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}

              </div>
            </span>
            <span>
              <span>
                <div className={s.userName}>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users;