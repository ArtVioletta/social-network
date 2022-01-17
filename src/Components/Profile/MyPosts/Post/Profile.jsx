import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts";


const Profile = () => {
  return <div>
    <div>
      <img src='https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true'/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </div>
};

export default Profile;