import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "@mui/material";

var myHeaders = new Headers();

function Reset() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("userName", username);
    urlencoded.append("password", password);
    urlencoded.append("id", "642e99b2bd4b99e559412dac");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://cdn.tauschtakel.de/admin-admin/updateLogin", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        if (data.status === "success") {
          navigate("/");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
