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
  const [id, setId] = useState();
  const [like, setLike] = useState();
  const { articleId } = useParams();
  useEffect(async () => {
    // const url = `https://cdn.tauschtakel.de/admin-article/${userId}`;
  
  
  
    const url = `https://cdn.tauschtakel.de/admin-article/${articleId}`;
console.log(articleId);
const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text);
    setEmail(data.article.description);
    setImage(data.article.image[0]);
    setPhoto(data.article.image)
    setName(data.article.title);
    setpostLat(data.article.postLat);
    setpostLon(data.article.postLon);
    setprice(data.article.price);
    setcategory(data.article.category);
    setavailableForDeal(data.article.availableForDeal);
    setcondition(data.article.condition);
    settime(data.time);
    setstatus(data.article.status);
    let like = data.article.likers.length
    setLike(like)
    setcreatedAt(data.article.createdAt);
  }, []);

  const buttonStyle = {
    border: "2px dotted #DE3163",
    color: "#DE3163",
    backgroundColor: "transparent",
    padding: "10px 10px",
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
    justifyContent: "center",
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
                <h1 className="itemTitle">{name} <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></h1>
                  <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{price}<span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">{category}<span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Zip Code:</span>
                  <span className="itemValue">Not Available<span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Condition:</span>
                  <span className="itemValue">{condition} <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
                <div style={{height:'20px'}}>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Online Sence:</span>
                  <span className="itemValue">{time} <span className="itemValue">
                  </span></span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Like:</span>
                  <span className="itemValue">{like} <span className="itemValue">
                  </span></span>
                  
                </div>
                {/* Button Section  */}
                <div style={buttonGroupStyle}>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle}
                    className="lowercase-text"
                  >
                   Delete
                  </Button>
                  <div style={{ width: "10px" }}></div>{" "}
                  {/* Add space between buttons */}
                   {/* Add space between buttons */}
                   <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle3}
                  >
                    Approve
                  </Button>
                  <div style={{ width: "10px" }}></div>{" "}
                  {/* Add space between buttons */}
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={buttonStyle2}
                  >
                   Unapprove
                  </Button>
                  <div style={{ width: "10px" }}></div>{" "}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width:'100%',height:'100%', paddingLeft:'20px'}}>
        <div className="detailItem">
                  <span style={{fontSize:23, fontWeight:'bold', color:'gray'}}>Discription:</span>
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  
                  
                </div>
                <div style={{height:'10px'}}></div>
                <span className="itemValue">{email} </span>

                <div style={{height:'40px'}}></div>

                <div className="detailItem">
                  <span style={{fontSize:23, fontWeight:'bold', color:'gray'}}>Picture</span>   
                  <div className="imageContainer">
        {photo && photo.length > 0 ? (
          photo.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} style={{width:'200px', height:'200px', borderRadius:'10px', marginRight:'10px'}} />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
