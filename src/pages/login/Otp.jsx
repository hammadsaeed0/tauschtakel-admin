import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const OTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpCode, setOtpCode] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleButtonClick = () => {
    const code = otp.join("");
    setOtpCode(code);
    if (!inputValue1) {
      return alert("Please Fill All The Inputs")
    }
    if (!inputValue2) {
      return alert("Please Fill All The Inputs")
    }
    if(inputValue1 === inputValue2){
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("otp", code);
urlencoded.append("password", inputValue1);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-admin/updatePassword", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data = JSON.parse(result);
    if(data.status === "success"){
      navigate('/home')
    }
    if(data.status === "error"){
      alert(data.message)
    }
  })
  .catch(error => console.log('error', error));
    }else{
     alert("Something Went Wrong")
    }
  };

  const isButtonDisabled = otp.some((digit) => digit === "");

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Update Password</h2>
        <div style={{ display: "flex", justifyContent: "center" , marginTop:'10px' }}>
          {otp.map((digit, index) => (
            <input
              key={index}
              autoComplete="off"
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={{
                width: "50px",
                height: "40px",
                margin: "0 5px",
                textAlign: "center",
                fontSize: "18px",
                backgroundColor: "#E0E0E0",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              autoComplete="off"
              style={{ width: "300px", marginBottom: "10px", backgroundColor: "#E0E0E0", }}
              value={inputValue1}
              onChange={handleInputChange1}
            />
            <FontAwesomeIcon
              icon={showPassword1 ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility1}
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              autoComplete="off"
              style={{ width: "300px", marginBottom: "10px" , backgroundColor: "#E0E0E0", }}
              value={inputValue2}
              onChange={handleInputChange2}
            />
            <FontAwesomeIcon
              icon={showPassword2 ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility2}
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
            />
          </div>
          <button
            onClick={handleButtonClick}
            disabled={isButtonDisabled}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              fontSize: "14px",
            }}
          >
            Update
          </button>
          
        </div>
        <Link to={"/reset"} style={{ textDecoration: "none", color: "#007bff", marginTop: "10px"  }}>
          <p>Resend Mail</p>
        </Link>
      </div>
    </div>
  );
          }
  export default OTP