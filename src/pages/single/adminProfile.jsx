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
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);
  const [username, setUsername] = useState()
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [password, setPassword] = useState();


  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };
  const handleTextInput3Change = (event) => {
    setTextInput3(event.target.value);
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
  const handleNamePopup = (id) => {
    // setIsPopupOpen(true);
    setIsNamePopupOpen(true)
    // setId(id)
  };
  const handlePasswordPopup = (id) => {
    // setIsPopupOpen(true);
    setIsPasswordPopupOpen(true)
    // setId(id)
  };
  const handleEmailPopup = (id) => {
    // setIsPopupOpen(true);
    setIsEmailPopupOpen(true)
    // setId(id)
  };

  const handleClosePopup =  async () => {
    




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
        console.log(uploadedImage);
        setImage(uploadedImage.image)
  setIsPopupOpen(false)


      }
    } else {
      console.log('Error occurred during image upload:', data.statusText);
    }

  }
  const handleNameClosePopup =  async () => {
    
    
    console.log(textInput1);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("userName", textInput1);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-admin/updateLogin", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data = JSON.parse(result)
    if(data.status === "success"){
      setIsNamePopupOpen(false)
      adminLogin()
    }
  })
  .catch(error => console.log('error', error));

  }
 
  const handlePasswordClosePopup =  async () => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("password", textInput2);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-admin/updateLogin", requestOptions)
  .then(response => response.text())
  .then(result => {
   
      let data = JSON.parse(result)
      if(data.status === "success"){
        setIsPasswordPopupOpen(false)
        adminLogin()
      }
  })
  .catch(error => console.log('error', error));
  }

  const handleEmailClosePopup =  async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", textInput3);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://cdn.tauschtakel.de/admin-admin/updateLogin", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result)
      if(data.status === "success"){
        setIsEmailPopupOpen(false)
        adminLogin()
      }
      })
      .catch(error => console.log('error', error));
  }


  const adminLogin = async () => {
    const url = 'https://cdn.tauschtakel.de/admin-admin/getCredentials';

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text)
setImage(data.data.image)
setUsername(data.data.userName)
setEmail(data.data.password)
setPassword(data.data.email)
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
                      style={{ width: "25px", marginTop:'80px' , marginLeft:'-40px', background:'white', borderRadius:'30px',  boxShadow: '1px 1px 5px #808080',}}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span>
              <div className="details">
                <h1 className="itemTitle">{username} <span className="itemValue" onClick={handleNamePopup}>
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png"
                      alt="avatar"
                      // onClick={handleImageClick}
                    />
                  </span></h1>
                <div className="detailItem">
                  <span className="itemKey">Password:</span>
                  <span className="itemValue">{email} <span className="itemValue" onClick={handlePasswordPopup}>
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
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{password}<span className="itemValue" onClick={handleEmailPopup}>
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
        {/* Image */}
        <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>

      <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
        <div>
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
    {/* Name */}
    <div style={{ pointerEvents: isNamePopupOpen ? "none" : "auto" }}>

      <Popup open={isNamePopupOpen} onClose={handleNameClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
        <div>
      <input
        type="text"
        value={textInput1}
        onChange={handleTextInput1Change}
        placeholder="Name"
      />
      <br />
      {selectedImage && <img style={{width: '100%', maxHeight: '300px', objectFit: 'contain'}} src={selectedImage} alt="Selected" />}
    </div>
            <button onClick={handleNameClosePopup}>Update Settings</button>
      
        </div>
      </Popup>
    </div>
    {/* Email */}
    <div style={{ pointerEvents: isEmailPopupOpen ? "none" : "auto" }}>

      <Popup open={isEmailPopupOpen} onClose={handleEmailClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
        <div>
      <input
        type="email"
        value={textInput3}
        onChange={handleTextInput3Change}
        placeholder="Email"
      />
      <br />
      {selectedImage && <img style={{width: '100%', maxHeight: '300px', objectFit: 'contain'}} src={selectedImage} alt="Selected" />}
    </div>
            <button onClick={handleEmailClosePopup}>Update Settings</button>
      
        </div>
      </Popup>
    </div>
    {/* Password */}
    <div style={{ pointerEvents: isPasswordPopupOpen ? "none" : "auto" }}>

      <Popup open={isPasswordPopupOpen} onClose={handlePasswordClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
        <div>
      <input
        type="text"
        value={textInput2}
        onChange={handleTextInput2Change}
        placeholder="Password"
      />
      <br />
      {selectedImage && <img style={{width: '100%', maxHeight: '300px', objectFit: 'contain'}} src={selectedImage} alt="Selected" />}
    </div>
            <button onClick={handlePasswordClosePopup}>Update Settings</button>
      
        </div>
      </Popup>
    </div>

      </div>
    </div>
  );
};

export default AdminProfile;
