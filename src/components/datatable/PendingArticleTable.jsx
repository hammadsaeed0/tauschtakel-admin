import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleColumns } from "../table/articletablesource";
import { Penarticletablesource } from "../table/penarticletablesource";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PendingArticleTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleApprove = (id) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("id", id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-article/approve", requestOptions)
  .then(response => response.text())
  .then(result => {
    fetchData()
  })
  .catch(error => console.log('error', error));
  };
  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id[0])
    // console.log(id[0]);
  };
  const handleOpenUserPopup = (id) => {
    setIsPopupOpen(true);
    setId(id)
    // console.log("------->",id);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleDelete = (id) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("id", id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-article/reject", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result);
    fetchData()
  })
  .catch(error => console.log('error', error));
  }
  const fetchData = async () => {
    const url = "https://cdn.tauschtakel.de/admin-article/pendingArticles";
    const response = await fetch(url);
    const data = await response.json();
    setData(data.articles);
    console.log(data.articles);
  };
  

  useEffect(() => {
    
    fetchData();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              onClick={() => handleApprove(params.row._id)}
            >
              <div className="viewButton">Approve</div>
              </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Reject
            </div>
          </div>
        );
      },
    },
  ];

 const Penarticletablesource = [
  {
    field: "title",
    headerName: "Title",
    width: 230,
    renderCell: (params) => {
      const handleImageClick = () => {
        handleOpenPopup(params.row.image)
      }
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image[0]} alt="avatar" />{" "} */}
          <img
            className="cellImg"
            src={params.row.image[0]}
            alt="avatar"
            onClick={handleImageClick}
          />
          <Link to={params.row._id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.title}
          </Link>
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 188,
    renderCell: (params) => {
      const handleImageClick1 = () => {
        handleOpenUserPopup(params.row.userData.image)
        // console.log("User",params.row.userData.image);
      }
      return (
        // <div className="cellWithImg">
        //   {" "}
        //   {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
        //   <Link to={`/users/${params.row.uid}`}  style={{textDecoration: 'none', color:'gray'}}>
        //   {params.row.userData.username}{" "}
        //   </Link>
        // </div>
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.userData.image}
            alt="avatar"
            onClick={handleImageClick1}
          />
          <Link to={params.row._id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.userData.username}
          </Link>
        </div>
      );
    },
  },
  {
    field: "Price",
    headerName: "Price",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
          {params.row.price}{" "}
        </div>
      );
    },
  },
  {
    field: "Category",
    headerName: "Category",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
          {params.row.category}{" "}
        </div>
      );
    },
  },
  {
    field: "Condition",
    headerName: "Condition",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
          {params.row.condition}{" "}
        </div>
      );
    },
  },
  {
    field: "Created At",
    headerName: "Created At",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
          {params.row.createdAt}{" "}
        </div>
      );
    },
  },
  {
    field: "Deleted Time",
    headerName: "Deleted Time",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
          {params.row.timeRemaining}{" "}
        </div>
      );
    },
  },
]; 


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Pending Articles
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>
      {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

      <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
         
     
            <img
            style={{ width: '100%', maxHeight: '700px', objectFit: 'contain' }}
            src={id}
            alt="avatar"
          />
            <button onClick={handleClosePopup}>Close</button>
      
        </div>
      </Popup>
    </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={Penarticletablesource.concat(actionColumn)}
        pageSize={50}
        rowsPerPageOptions={[50]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default PendingArticleTable;
