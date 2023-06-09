import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import StoreIcon from "@mui/icons-material/Store";
import AppsIcon from '@mui/icons-material/Apps';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Tauschtakel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/home" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/interest" style={{ textDecoration: "none" }}>
            <li>
              <AppsIcon className="icon" />
              <span>Interest</span>
            </li>
          </Link>
          <Link to="/article" style={{ textDecoration: "none" }}>
            <li>
              <ChildFriendlyIcon className="icon" />
              <span>Articles</span>
            </li>
          </Link>
          <Link to="/pendingArticle" style={{ textDecoration: "none" }}>
            <li>
              <HourglassTopIcon className="icon" />
              <span>Pending Articles</span>
            </li>
          </Link>
          <li>
            <ReportGmailerrorredIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">USEFUL</p>
          <Link to="/notification" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <li>
            <AttachMoneyIcon className="icon" />
            <span>Commercial Adds</span>
          </li>
          <p className="title">USER</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Admin Setting</span>
          </li>
          </Link>
          <Link to="/backup" style={{ textDecoration: "none" }}>
          <li>
            <CloudDownloadIcon className="icon" />
            <span>Backup Database</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
