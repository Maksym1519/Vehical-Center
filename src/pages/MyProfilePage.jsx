import '../style.scss';
import Pp from './myProfilePage.module.scss';
import React, { useState } from 'react';
import { ProfileHeader } from '../components/myProfilePage/ProfileHeader';
import { ProfileAboutUser } from '../components/myProfilePage/AboutUser';
import { ProfileWFHCards } from '../components/myProfilePage/ProfileWFH-Cards';
import ProfileAvatar from '../images/main-avatar.svg'

export const MyProfile = () => {
     return (
        <div className={Pp.wrapper}>
               <ProfileHeader />
         <div className={Pp.container}>
         <ProfileAboutUser />
         <ProfileWFHCards />
        </div>
       </div>
    )
}