import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import UList from "../../components/table/userTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InsertDataTable from "../../components/datatable/InsertTable";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArticleTabe from "../../components/datatable/ArticleTable"

const Single = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const { userId } = useParams();
  useEffect(async () => {
    const url = `https://cdn.tauschtakel.de/admin-user/${userId}`;

    const response = await fetch(url);

    const text = await response.text();
    let data = JSON.parse(text);
    setId(data.user._id)
    setEmail(data.user.email);
    setImage(data.user.image);
    setName(data.user.username);
  }, []);
  const buttonStyle = {
    border: "2px solid #DE3163",
    color: "#DE3163",
    backgroundColor: "transparent",
    padding: "10px 10px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: 'bold',
    width: "130px", // Custom width
    height: "30px", // Custom height
  };
  const buttonStyle1 = {
    border: "2px solid #40e0d0",
    color: "#40e0d0",
    backgroundColor: "transparent",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: 'bold',
   
    width: "150px", // Custom width
    height: "30px", // Custom height
  };
  const buttonStyle2 = {
    border: "2px solid #FF5E0E",
    color: "#FF5E0E",
    backgroundColor: "transparent",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: 'bold',
    
    width: "120px", // Custom width
    height: "30px", // Custom height
  };
  const buttonStyle3 = {
    border: "2px solid #32cd32",
    color: "#32cd32",
    backgroundColor: "transparent",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: 'bold',

    width: "100px", // Custom width
    height: "30px", // Custom height
  };
  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const sendNotification = () =>{
    navigate(`/notification?id=${id}`)
    // console.log(id);
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={image} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{name} <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email} <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User Sence:</span>
                  <span className="itemValue">24</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Zip Code:</span>
                  <span className="itemValue">23 <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Article Online:</span>
                  <span className="itemValue">43</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Interest Selected:</span>
                  <span className="itemValue">324</span>
                </div>
                {/* Button Section  */}
                <div style={buttonGroupStyle}>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle}
                  >
                    Password Reset
                  </Button>
                  <div style={{ width: "10px" }}></div>{" "}
                  {/* Add space between buttons */}
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle1}
                    onClick={sendNotification}
                  >
                    Send Notification
                  </Button>
                  <div style={{ width: "10px" }}></div>{" "}
                  {/* Add space between buttons */}
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle2}
                  >
                    Delete User
                  </Button>
                  <div style={{ width: "10px" }}></div>{" "}
                  {/* Add space between buttons */}
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle3}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Article</h1>
         <ArticleTabe />
        </div>
      </div>
    </div>
  );
};

export default Single;
