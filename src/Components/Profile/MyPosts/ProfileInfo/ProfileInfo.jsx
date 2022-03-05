import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/*<div>*/}
      {/*  <img*/}
      <div className={s.imageLayout} />
      {/*    src="https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock} />
      <img src={props.profile.photos.large} />
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
