import React, { useState } from "react";
import styles from "./HomePage.module.css";
import NavBar from "../NavBar/NavBar";
import ContentPage from "../contentPage/ContentPage";

const HomePage = ({ data }) => {
  const [page, setPage] = useState("jobList");
  const handleContentPage = (text) => {
    setPage(text);
  };

  return (
    <>
      <NavBar />
      {data.length ? (
        <div>
          <div className={styles.jobDiv}>
            <div
              className={styles.jobCol}
              onClick={() => handleContentPage("jobList")}
            >
              Job List
            </div>
            <div
              className={styles.jobCol}
              onClick={() => handleContentPage("myJobs")}
            >
              My Jobs
            </div>
          </div>
          <ContentPage page={page} data={data} />
        </div>
      ) : (
        <div className={styles.contentDiv}>welcome to Job Application</div>
      )}
    </>
  );
};

export default HomePage;
