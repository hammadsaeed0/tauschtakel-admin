import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const Backup = () => {
  const navigate = useNavigate();

const handleClick = () => {
  console.log("Hey");
}
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
      <button
        style={{
          width: '300px',
          height: '50px',
        }}
        onClick={handleClick}
      >
        Get Backup
      </button>
    </div>
      </div>
    </div>
  );
};

export default Backup;
