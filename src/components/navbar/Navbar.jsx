import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect , useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [image, setimage] = useState()


  const adminData = async () => {
    const url = 'https://cdn.tauschtakel.de/admin-admin/getCredentials';

    const response = await fetch(url);
    
    const text = await response.text();
    let data = JSON.parse(text)
    setimage(data.data.image)
    // console.log(data.data.image);
  }
  useEffect(() => {
    adminData()
  }, [])
  
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div>
          {/* <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon /> */}
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          {/* <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div> */}
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <Link to={'/admin'}>
            <img
              src={image}
              alt=""
              className="avatar"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
