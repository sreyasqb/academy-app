import React from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/peslogo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Link to={`/homepage`} style={{textDecoration: 'none', color: 'inherit'}}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img className={classes.logoImg} src={logo} alt="pes-logo" width="60px" height="60px" />
          <ul>
            <li>PES</li>
            <li>UNIVERSITY</li>
          </ul>
        </div>
        <div className={classes.menuBar}>
          <span className="material-icons" style={{ color: "white",fontSize:"35px" }}>
            clear_all
          </span>
          <h2>Menu</h2>
        </div>
      </div>
    </Link>
  );
};
export default Navbar;