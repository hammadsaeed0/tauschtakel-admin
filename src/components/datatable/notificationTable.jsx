import "../../pages/single/single.scss";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowNotificationTable from "./showNotificationTable";

const NotificationTable = () => {
  const { userId } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
 
  
 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("title", title);
urlencoded.append("body", message);
urlencoded.append("uid", id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-notification/sendNotification", requestOptions)
  .then(response => response.text())
  .then(result => console.log("--------->", result))
  .catch(error => console.log('error', error));
    }else {
          var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", title);
    urlencoded.append("body", message);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://cdn.tauschtakel.de/admin-notification/sendNotification",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log("--------->", result))
      .catch((error) => console.log("error", error));
    }
  };

  const handleClear = () => {
    setMessage('')
    setTitle('')
  };
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Send Notification</h1>
            <div className="item">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title" style={{fontSize:'14px', color:'gray'}}>Title:</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{fontSize:'14px', color:'gray'}}>Text:</label>
                  <textarea
                    className="textarea"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div style={{ display: "flex" , alignSelf:'end'  }}>
                  {/* <button
                    className="deleteButton"
                    onClick={handleClear}
                  >
                    Clear
                  </button> */}
                  <div className="cellAction">
            <div
              className="deleteButton"
              onClick={handleClear}
            >
              Clear
            </div>
          </div>
            
          <div className="cellAction">
            <div
              className="sendButton"
              onClick={() => handleSubmit()}
            >
              Send
            </div>
          </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <ShowNotificationTable />
        </div>
      </div>
    </div>
  );
};

export default NotificationTable;
