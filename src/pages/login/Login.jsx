import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

var myHeaders = new Headers();

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
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

    fetch("https://cdn.tauschtakel.de/admin-admin/makeLogin", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        console.log(data);
        if (data.status === "success") {
          navigate("/home");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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
             <div style={{ position: "relative" }}>
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              autoComplete="new-email"
              style={{ width: "400px", marginBottom: "10px", }}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword1 ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility1}
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
            />
          </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button style={{ width:'420px', cursor: "pointer" }} >Login</button>
        </form>
        <div className="reset-link">
          <Link to="/reset">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
