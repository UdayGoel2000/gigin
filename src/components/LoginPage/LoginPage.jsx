import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setData }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (data) => {
    if (data.email)
      setLoginData((prevState) => ({ ...prevState, email: data.email }));
    else if (data.password)
      setLoginData((prevState) => ({ ...prevState, password: data.password }));
  };
  const handleLogin = () => {
    let baseUrl = "https://dev123.gigin.ai/abc/index.php/";
    let loginUrl = `${baseUrl}/Api_controller/login_email`;
    axios.post(loginUrl, loginData).then(
      (response) => {
        if (response.status === 200) {
          let url = `${baseUrl}/v4/gigs/postings/list?limit=10&offset=0&is_precal_done=1&scope=recomm`;
          const param = JSON.stringify({ employee_id: "221516" });
          axios.post(url, param).then(
            (response) => {
              if (response.status === 200) {
                setData(response.data.data);
                navigate("/");
              }
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <>
      <NavBar />
      <div className={styles.mainDiv}>
        <h4>Login Page</h4>
        <div className={styles.fieldDivs}>
          <p>Email Id</p>
          <input
            type="text"
            value={loginData.email}
            onChange={(e) =>
              handleChange({ email: e.target.value, password: "" })
            }
          />
        </div>
        <div className={styles.fieldDivs}>
          <p>Password</p>
          <input
            type="text"
            value={loginData.password}
            onChange={(e) =>
              handleChange({ password: e.target.value, email: "" })
            }
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Login IN
        </button>
      </div>
    </>
  );
};

export default LoginPage;
