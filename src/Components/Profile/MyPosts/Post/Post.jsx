import React from "react";
import s from "./Post.module.css";


const Post = (props) => {

  console.log (props.message);
  return(
    <div className={s.item}>
      <img src ='https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg'/>
      {props.message}
      <div>
      <span>like</span> {props.likesCount}

    </div>
    </div>
  )
}




export default Post;