import React from "react";
import s from "../NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          {" "}
          Profile{" "}
        </NavLink>
      </div>
      <div className={"${s.item} ${s.active}"}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          {" "}
          Messages{" "}
        </NavLink>
      </div>
      <div className={"${s.item} ${s.active}"}>
        <NavLink to="/users"> Users </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to={""}> News </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={""}> Music </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={""}> Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={""}>
          <p>Friends</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
