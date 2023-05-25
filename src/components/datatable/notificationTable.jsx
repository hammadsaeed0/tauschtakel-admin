import "../../pages/single/single.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowNotificationTable from "./showNotificationTable";



const NotificationTable = () => {
  const { userId } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("title", title);
urlencoded.append("body", message);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://3.75.129.124:3000/admin-notification/sendNotification", requestOptions)
  .then(response => response.text())
  .then(result => console.log("--------->",result))
  .catch(error => console.log('error', error));
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
                  <label htmlFor="message">Message:</label>
                  <textarea
                  className="textarea"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit">Notification</button>
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
