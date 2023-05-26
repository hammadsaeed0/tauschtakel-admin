import "./admin.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const AdminProfile = () => {
  const [avatar, setAvatar] = useState('');  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
      
        <div className="main">
        <div className="row">
        {/* <img src={avatar} alt="Avatar" className="avatar-preview" /> */}
        </div>  
        
        <div className="row1">
          <div>
          <div className="name"></div>
          <div className="edit"></div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
