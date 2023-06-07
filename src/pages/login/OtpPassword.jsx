import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var myHeaders = new Headers();

function OtpPassword() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("otp", username);
urlencoded.append("password", password);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-admin/updatePassword", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data  = JSON.parse(result)
    console.log(data);
    if(data.status === "success"){
      navigate('/home')
    }
    if(data.status === "error"){
      alert(data.message)
    }
  })
  .catch(error => console.log('error', error));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Update</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default OtpPassword;
