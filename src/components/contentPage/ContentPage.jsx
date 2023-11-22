import React from "react";
import style from "./ContentPage.module.css";
import JobCard from "../JobCard/JobCard";

const ContentPage = ({ page, data }) => {
  return (
    <div className={style.jobCardsDiv}>
      {page === "jobList" ? (
        data?.map((ele, i) => (
          <JobCard
            key={i}
            title={ele.dtls.ttl}
            location={`${ele.dtls.loc.city},${ele.dtls.loc.state}`}
            status={ele.dtls.appcnt.txt}
          />
        ))
      ) : (
        <div>myJObs</div>
      )}
    </div>
  );
};

export default ContentPage;
