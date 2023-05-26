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

const Single = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const { userId } = useParams();
  useEffect(async () => {
    const url = `https://cdn.tauschtakel.de/admin-user/${userId}`;

    const response = await fetch(url);

    const text = await response.text();
    let data = JSON.parse(text);
    setEmail(data.user.email);
    setImage(data.user.image);
    setName(data.user.username);
  }, []);
  const buttonStyle = {
    border: '2px solid red',
    color: 'black',
    backgroundColor: 'transparent',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '10px',
    width: '100px', // Custom width
    height: '30px', // Custom height
  };

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
                <h1 className="itemTitle">{name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email}</span>
                  <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                    // onClick={handleImageClick}
                    />
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User Sence:</span>
                  <span className="itemValue">24</span>
                  <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                    // onClick={handleImageClick}
                    />
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Zip Code:</span>
                  <span className="itemValue">23</span>
                  <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                    // onClick={handleImageClick}
                    />
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Article Online:</span>
                  <span className="itemValue">43</span>
                  <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                    // onClick={handleImageClick}
                    />
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Interest Selected:</span>
                  <span className="itemValue">324</span>
                  <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                    // onClick={handleImageClick}
                    />
                  </span>
                </div>
                {/* Button Section  */}
                <Button variant="outlined" color="error" size="small" style={buttonStyle}>
                  Error
                </Button>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Interest</h1>
          <InsertDataTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
