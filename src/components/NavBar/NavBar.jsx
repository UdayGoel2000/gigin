import React from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainDiv}>
      <p>Gigin</p>
      <p>Job listing App</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default NavBar;
