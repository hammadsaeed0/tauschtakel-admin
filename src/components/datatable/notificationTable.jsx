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
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="message">Text</label>
                  <textarea
                    className="textarea"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div style={{ display: "flex" , justifySelf:'center' }}>
                  <button
                    style={{
                      padding: "10px 20px",
                      marginRight:'10px',
                      background: "transparent",
                      color: "crimson",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border:'2px solid crimson'
                    }}
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: "10px 20px",
                      marginRight:'10px',
                      background: "transparent",
                      color: "#20AC73",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border:'2px solid #20AC73'
                    }}
                  >
                    Send
                  </button>
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
