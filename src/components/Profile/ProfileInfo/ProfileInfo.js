import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import fb from '../../../assets/images/fb.svg';
import vk from '../../../assets/images/vk.svg';
import git from '../../../assets/images/git.svg';
import twitter from '../../../assets/images/twitter.svg';
import site from '../../../assets/images/site.svg';
import youtube from '../../../assets/images/youtube.svg';
import instagram from '../../../assets/images/instagram.svg';
import userPhoto from '../../../assets/images/user.jpg';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <>
      <div className={s.imageUser}>
      <div className={s.imageWrap}>
        <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt="" />
      </div>
      <div className={s.profilePhoto}>
          <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
        </div>
      </div>

      <div className={s.profile}>
        <div className={s.profileFullName}>{props.profile.fullName}</div>
        <div className={s.profileInfo}>
          <div className={s.profileInfoSocial}>
            <ul className={s.profileInfoSocialList}>
              
              {props.profile.contacts.facebook ? <li><a target="_blank" href={`https://${props.profile.contacts.facebook}`}><img src={fb}/></a></li> : ''}
              {props.profile.contacts.vk ? <li><a target="_blank" href={`https://${props.profile.contacts.vk}`}><img src={vk}/></a></li> : ''}
              {props.profile.contacts.twitter ? <li><a target="_blank" href={`https://${props.profile.contacts.twitter}`}><img src={twitter}/></a></li> : ''}
              {props.profile.contacts.instagram ? <li><a target="_blank" href={`https://${props.profile.contacts.instagram}`}><img src={instagram}/></a></li> : ''}
              {props.profile.contacts.youtube ? <li><a target="_blank" href={`https://${props.profile.contacts.youtube}`}><img src={youtube}/></a></li> : ''}
              {props.profile.contacts.github ? <li><a target="_blank" href={`https://${props.profile.contacts.github}`}><img src={git}/></a></li> : ''}
              {props.profile.contacts.website ? <li><a target="_blank" href={`https://${props.profile.contacts.website}`}><img src={site}/></a></li> : ''}

            </ul>
          </div>
        </div>
        {props.profile.lookingForAJob === true ? <div className={s.profileInfoJob}><strong>Работа:</strong> {props.profile.lookingForAJobDescription}</div> : ''}
        {props.profile.aboutMe ? <div className={s.profileInfoAbout}><strong>О себе:</strong> {props.profile.aboutMe}</div> : ''}
      </div>
    </>
  )
}


export default ProfileInfo;