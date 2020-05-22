import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div className={s.image_wrap}>
        <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt="" />
      </div>
      <div className={s.profile}>
        avatar + descr
      </div>
    </>
  )
}


export default ProfileInfo;