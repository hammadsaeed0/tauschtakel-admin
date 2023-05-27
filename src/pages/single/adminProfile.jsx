import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { flushSync } from "react-dom";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [name, setName] = useState();
  const [username, setUsername] = useState()
  const [email, setEmail] = useState();
  const [image, setImage] = useState();


  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };

  const handleTextInput2Change = (event) => {
    setTextInput2(event.target.value);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

 



  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    // setId(id)
  };

  const handleClosePopup =  async () => {
    
//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("username", textInput1);
// urlencoded.append("password", textInput2);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("http://3.75.129.124:3000/admin-admin/updateLogin", requestOptions)
//   .then(response => response.text())
//   .then(result => {
//     let data = JSON.parse(result);
//     // console.log(data.data.password);
//     setUsername(data.data.userName)
//     setEmail(data.data.password)

//   })
//   .catch(error => console.log('error', error));


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("username", textInput1);
urlencoded.append("password", textInput2);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://3.75.129.124:3000/admin-admin/updateLogin", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data = JSON.parse(result)
    setEmail(data.data.password)
    setUsername(data.data.userName)
  })
  .catch(error => console.log('error', error));



  if (!selectedImage) {
    console.log('No image found');
    return;
  }

  try {
    const response = await fetch(selectedImage);
    const file = await response.blob();

    const formData = new FormData();
    formData.append('image', file);

    console.log(file);

    for (const [key, value] of formData.entries()) {
      console.log(key + ', ' + value);
    }

    const data = await fetch('https://cdn.tauschtakel.de/admin-admin/addImage', {
      method: 'POST',
      body: formData,
    });

    if (data.ok) {
      const uploadedImage = await data.json();
      console.log('Successfully uploaded image:', uploadedImage.status);
      if(uploadedImage.status === "success"){
        setImage(uploadedImage.image)
  setIsPopupOpen(false)


      }
    } else {
      console.log('Error occurred during image upload:', data.statusText);
    }
  } catch (error) {
    console.log('Error occurred during image upload:', error);
  }

  }

 


  const adminLogin = async () => {
    const url = 'https://cdn.tauschtakel.de/admin-admin/getCredentials';

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text)
setImage(data.data.image)
setUsername(data.data.userName)
setEmail(data.data.password)
  }
useEffect(async() => {
  adminLogin()
}, [])


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Admin Setting</h1>
            <div className="item">
              <img src={image} alt="" className="itemImg" />
              <span className="itemValue" onClick={handleOpenPopup}>
                    <img
                      style={{ width: "20px", marginTop:'80px' , marginLeft:'-40px', background:'white', borderRadius:'10px',  boxShadow: '1px 2px 10px #808080',}}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span>
              <div className="details">
                <h1 className="itemTitle">{username} <span className="itemValue" onClick={handleOpenPopup}>
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email} <span className="itemValue" onClick={handleOpenPopup}>
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
        <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>
      {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

      <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
        <div>
      <input
        type="text"
        value={textInput1}
        onChange={handleTextInput1Change}
        placeholder="Enter Text 1"
      />
      <br />
      <input
        type="text"
        value={textInput2}
        onChange={handleTextInput2Change}
        placeholder="Enter Text 2"
      />
      <br />
      <input type="file" accept="image/*" onChange={handleImageSelect} />
      <br />
      <br />
      {selectedImage && <img style={{width: '100%', maxHeight: '300px', objectFit: 'contain'}} src={selectedImage} alt="Selected" />}
    </div>
            <button onClick={handleClosePopup}>Update Settings</button>
      
        </div>
      </Popup>
    </div>
      </div>
    </div>
  );
};

export default AdminProfile;
