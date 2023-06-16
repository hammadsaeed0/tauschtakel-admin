import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";


const Backup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true); // Set loading state to true

      const response = await fetch('https://cdn.tauschtakel.de/admin-admin/dbBackup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });

      const blob = await response.blob();

      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'backup.zip');
      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading state to false after API request completes
    }
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      
      <button style={{width:'400px'}} onClick={handleDownload}>
         Download Backup
      </button>
    </div>
      </div>
    </div>
  );
};

export default Backup;
