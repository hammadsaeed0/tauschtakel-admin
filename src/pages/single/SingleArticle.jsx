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
import { useNavigate } from "react-router-dom";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ArticleTabe from "../../components/datatable/ArticleTable";

const SingleArticle = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [postLat, setpostLat] = useState();
  const [postLon, setpostLon] = useState();
  const [price, setprice] = useState();
  const [category, setcategory] = useState();
  const [availableForDeal, setavailableForDeal] = useState();
  const [condition, setcondition] = useState();
  const [status, setstatus] = useState();
  const [createdAt, setcreatedAt] = useState();
  const [image, setImage] = useState();
  const [photo, setPhoto] = useState();
  const [time, settime] = useState();
  const [Deletetime, setDeleteTime] = useState();
  const [id, setId] = useState();
  const [like, setLike] = useState();
  const { articleId } = useParams();
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const getData = async () => {
    const url = `https://cdn.tauschtakel.de/admin-article/${articleId}`;
    const response = await fetch(url);
    const text = await response.text();
    let data = JSON.parse(text);
    setEmail(data.article.description);
    setImage(data.article.image[0]);
    setPhoto(data.article.image);
    setName(data.article.title);
    setpostLat(data.article.postLat);
    setpostLon(data.article.postLon);
    setprice(data.article.price);
    setcategory(data.article.category);
    setavailableForDeal(data.article.availableForDeal);
    setcondition(data.article.condition);
    settime(data.time);
    setDeleteTime(data.article.createdAt);
    setstatus(data.article.status);
    let like = data.article.likers.length;
    setLike(like);
    setcreatedAt(data.article.createdAt);
  }

  useEffect(async () => {
    // const url = `https://cdn.tauschtakel.de/admin-article/${userId}`;

    

getData()

  }, [articleId]);

  const buttonStyle = {
    border: "2px dotted #DE3163",
    color: "#DE3163",
    backgroundColor: "transparent",
    padding: "10px 10px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: "bold",
    textDecoration: "none",
    width: "130px", // Custom width
    height: "30px", // Custom height
  };
  const buttonStyle2 = {
    border: "2px dotted #FFC000",
    color: "#FFC000",
    backgroundColor: "transparent",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: "bold",
    textDecoration: "none",

    width: "120px", // Custom width
    height: "30px", // Custom height
  };
  const buttonStyle3 = {
    border: "2px dotted #32cd32",
    color: "#32cd32",
    backgroundColor: "transparent",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: "bold",
    textDecoration: "none",

    width: "100px", // Custom width
    height: "30px", // Custom height
  };
  const buttonGroupStyle = {
    display: "flex",
  };

  const handleDelete = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", articleId);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://cdn.tauschtakel.de/admin-article/delete", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        navigate("/article");
      })
      .catch((error) => console.log("error", error));
  };
  const handleApprove = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://cdn.tauschtakel.de/admin-article/approve", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getData()
      })
      .catch((error) => console.log("error", error));
  };
  const handleDeleteClick = () => {
    handleDeletePopup(articleId);
  };
  const handleDeletePopup = () => {
    setIsDeletePopupOpen(true);
  };
  const handleDeleteClosePopup1 = (data) => {
    setIsDeletePopupOpen(false);
    if (data === "Yes") {
      handleDelete();
    } else {
      setIsDeletePopupOpen(false);
    }
  };
  const handleUnapprove = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://cdn.tauschtakel.de/admin-article/unApprove", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getData()
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Article Information</h1>
            <div className="item">
              <img src={image} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  {name}{" "}
                  <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span>
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">
                    {price}
                    <span className="itemValue">
                      <img
                        style={{ width: "20px" }}
                        src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                        alt="avatar"
                        // onClick={handleImageClick}
                      />
                    </span>
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">
                    {category}
                    <span className="itemValue">
                      <img
                        style={{ width: "20px" }}
                        src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                        alt="avatar"
                        // onClick={handleImageClick}
                      />
                    </span>
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Condition:</span>
                  <span className="itemValue">
                    {condition}{" "}
                    <span className="itemValue">
                      <img
                        style={{ width: "20px" }}
                        src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                        alt="avatar"
                        // onClick={handleImageClick}
                      />
                    </span>
                  </span>
                </div>
                <div style={{ height: "20px" }}></div>
                <div className="detailItem">
                  <span className="itemKey">Online Since:</span>
                  <span className="itemValue">
                    {Deletetime} <span className="itemValue"></span>
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Deleting Time:</span>
                  <span className="itemValue">
                    {time} <span className="itemValue"></span>
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Like: </span>
                  <span className="itemValue">
                    {like} <span className="itemValue"></span>
                  </span>
                </div>
                <div style={{ width: "10px", height: "10px" }}></div>{" "}
                {/* Button Section  */}
                <div style={buttonGroupStyle}>
                  <div
                    className="deleteButton"
                    onClick={() => handleDeleteClick(articleId)}
                  >
                    Delete
                  </div>
                  <div style={{ width: "10px" }}></div>{" "}
                  {status === "pending" ? (
                    <div
                      className="sendButton"
                      onClick={() => handleApprove(articleId)}
                    >
                      Approve
                    </div>
                  ) : (
                    <div
                      className="sendButton2"
                      onClick={() => handleUnapprove(articleId)}
                    >
                      Unapprove
                    </div>
                  )}
                  <div style={{ width: "10px" }}></div>{" "}
                  {/* Add space between buttons */}
                  <div style={{ width: "10px" }}></div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div style={{ pointerEvents: isDeletePopupOpen ? "none" : "auto" }}>
              {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

              <Popup
                open={isDeletePopupOpen}
                onClose={handleDeleteClosePopup1}
                modal
              >
                <div
                  style={{
                    background: "transparent",
                    padding: "20px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                      height: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        width: "200px",
                        backgroundColor: "crimson",
                        color: "white",
                      }}
                      onClick={() => handleDeleteClosePopup1("Yes")}
                    >
                      Yes
                    </button>
                    <button
                      style={{ width: "200px" }}
                      onClick={() => handleDeleteClosePopup1("No")}
                    >
                      No
                    </button>
                  </div>
                </div>
              </Popup>
            </div>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", paddingLeft: "20px" }}>
          <div className="detailItem">
            <span style={{ fontSize: 23, fontWeight: "bold", color: "gray" }}>
              Description :
            </span>
            <img
              style={{ width: "20px" }}
              src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
              alt="avatar"
              // onClick={handleImageClick}
            />
          </div>
          <div style={{ height: "10px" }}></div>
          <span className="itemValue">{email} </span>

          <div style={{ height: "40px" }}></div>

          <div className="detailItem">
            <span style={{ fontSize: 23, fontWeight: "bold", color: "gray" }}>
              Picture
            </span>
            <div style={{ display: "flex" }}>
              {photo && photo.length > 0 ? (
                photo.map((image, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={image}
                      alt={`Image ${index}`}
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                        marginRight: "10px",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        marginTop: "5px",
                        right: "20px",
                      }}
                    >
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../components/Image/delete.png")}
                      />
                    </span>
                  </div>
                ))
              ) : (
                <p>No images available.</p>
              )}
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "50px",
                  position: "relative",
                }}
                src={require("../../components/Image/camera.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
