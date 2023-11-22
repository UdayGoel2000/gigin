import React from "react";
import styles from "./JobCard.module.css";

const JobCard = ({ title, location, status }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{location}</p>
      <button disabled={status === "applied" ? true : false}>
        {status === "applied" ? "Applied" : "Apply"}
      </button>
    </div>
  );
};

export default JobCard;
