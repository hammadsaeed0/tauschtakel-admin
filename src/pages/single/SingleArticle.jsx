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
  const [id, setId] = useState();
  const { articleId } = useParams();
  useEffect(async () => {
    // const url = `https://cdn.tauschtakel.de/admin-article/${userId}`;
  
  
  
    const url = `https://cdn.tauschtakel.de/admin-article/${articleId}`;

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text);
    setEmail(data.article.description);
    setImage(data.article.image[0]);
    setName(data.article.title);
    setpostLat(data.article.postLat);
    setpostLon(data.article.postLon);
    setprice(data.article.price);
    setcategory(data.article.category);
    setavailableForDeal(data.article.availableForDeal);
    setcondition(data.article.condition);
    setstatus(data.article.status);
    setcreatedAt(data.article.createdAt);
  }, []);

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
                  <span className="itemKey">Discription:</span>
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
                  <span className="itemKey">PostLat:</span>
                  <span className="itemValue">{postLat}<span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">PostLon:</span>
                  <span className="itemValue">{postLon}<span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
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
                  <span className="itemKey">Available For Deal:</span>
                  <span className="itemValue">{availableForDeal}<span className="itemValue">
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
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{status} <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">CreatedAt:</span>
                  <span className="itemValue">{createdAt} <span className="itemValue">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
