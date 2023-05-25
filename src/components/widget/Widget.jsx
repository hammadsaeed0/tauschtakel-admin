import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://3.75.129.124:3000/admin-admin/meta";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const widgetData = {
    user: {
      title: "USERS",
      isMoney: false,
      link: "See all Users",
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
      getData: () => data?.users,
    },
    order: {
      title: "DEALS",
      isMoney: false,
      link: "View all Deals",
      icon: (
        <PublishedWithChangesIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      ),
      getData: () => data?.deals,
    },
    earning: {
      title: "ARTICLES",
      isMoney: true,
      link: "View all Articles",
      icon: (
        <ChildFriendlyIcon
          className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      ),
      getData: () => data?.articles,
    },
    balance: {
      title: "PENDING ARTICLES",
      isMoney: true,
      link: "Pending articles for Approval",
      icon: (
        <HourglassTopIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      ),
      getData: () => data?.pendingArticles,
    },
  };

  const widget = widgetData[type];

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{widget.title}</span>
        <span className="counter">{widget.getData()}</span>
        <Link
          className="link"
          to={
            widget.title === "USERS"
              ? "/users"
              : widget.title === "DEALS"
              ? "/deal"
              : widget.title === "PENDING ARTICLES"
              ? "/pendingArticle"
              : widget.title === "ARTICLES"
              ? "/article"
              : null
          }
        >
          {widget.link}
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {20} %
        </div>
        {widget.icon}
      </div>
    </div>
  );
};

export default Widget;
