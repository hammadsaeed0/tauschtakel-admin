import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleColumns } from "../table/articletablesource";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Datatable = () => {
  const [data, setData] = useState([]);
  const [title, setTile] = useState('Article');
  const [id, setId] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id)
    console.log(id[0]);
  };

  const handleApprove = async(id) => {
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
    console.log("Approve", result);
    fetchData()
  })
  .catch(error => console.log('error', error));
  };

  const handleUnapprove = async(id) => {
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

fetch("https://cdn.tauschtakel.de/admin-article/unApprove", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
  };
  
  const handlePending = async(id) => {
    const url = 'https://cdn.tauschtakel.de/admin-article/pendingArticles';

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text)
setData(data.articles)
setTile("Pending Article")

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

fetch("https://cdn.tauschtakel.de/admin-article/delete", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
  }

  const fetchData = async () => {
    const url = "https://cdn.tauschtakel.de/admin-article/allArticles";
    const response = await fetch(url);
    const data = await response.json();
    setData(data.articles);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        console.log(params.row);
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            {
              params.row.status === "pending" ? <div
              className="AButton"
              onClick={() => handleApprove(params.row._id)}
            >
              Approve
            </div> : params.row.status === "approved" ? <div
              className="UButton"
              onClick={() => handleUnapprove(params.row._id)}
            >
              Unapprove
            </div> : null
            }
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

   const ArticleColumns = [
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
          {params.row.title}{" "}
          </Link>
        </div>
      );
    },
  },
  {
    field: "Username",
    headerName: "Username",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}
          <Link to={`/users/${params.row.uid}`}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.username}
          </Link>
        </div>
      );
    },
  },
  
  {
    field: "Price",
    headerName: "Price",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
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
    field: "created",
    headerName: "Created At",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {/* <img className="cellImg" src={params.row.image} alt="avatar" /> */}{" "}
          {params.row.createdAt}
        </div>
      );
    },
  },
]; //temporary data export const userRows = [ { id: 1, username: "Snow", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", status: "active", email: "1snow@gmail.com", age: 35, }, { id: 2, username: "Jamie Lannister", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "2snow@gmail.com", status: "passive", age: 42, }, { id: 3, username: "Lannister", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "3snow@gmail.com", status: "pending", age: 45, }, { id: 4, username: "Stark", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "4snow@gmail.com", status: "active", age: 16, }, { id: 5, username: "Targaryen", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "5snow@gmail.com", status: "passive", age: 22, }, { id: 6, username: "Melisandre", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "6snow@gmail.com", status: "active", age: 15, }, { id: 7, username: "Clifford", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "7snow@gmail.com", status: "passive", age: 44, }, { id: 8, username: "Frances", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "8snow@gmail.com", status: "active", age: 36, }, { id: 9, username: "Roxie", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "snow@gmail.com", status: "pending", age: 65, }, { id: 10, username: "Roxie", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "snow@gmail.com", status: "active", age: 65, }, ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {/* <div className="setBtn">
        <div className="link" onClick={() => handleApprove()}>
          New Article
        </div>
        <div className="link" onClick={() => handlePending()}>
          Pending Article
        </div>
        </div> */}
      </div>
      <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>
      {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

      <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
         
     
            <img
            style={{ width: '100%', maxHeight: '700px', objectFit: 'contain' }}
            src={id[0]}
            alt="avatar"
          />
            <button onClick={handleClosePopup}>Close</button>
      
        </div>
      </Popup>
    </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={ArticleColumns.concat(actionColumn)}
        pageSize={50}
        rowsPerPageOptions={[50]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
