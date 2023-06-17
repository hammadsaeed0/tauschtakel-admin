import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);


  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id)
  };
  const handleDeletePopup = (id) => {
    setIsDeletePopupOpen(true);
    setId(id)
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleDeleteClosePopup = () => {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("uid", id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-user/delete", requestOptions)
  .then(response => response.text())
  .then(result => {
    fetchData();
    setIsDeletePopupOpen(false);
  })
  .catch(error => console.log('error', error));
    
  };

const handleDeleteClosePopup1 = (data) => {
  if (data === "Yes") {
    handleDeleteClosePopup()
  }else{
    setIsDeletePopupOpen(false)
  }
}
  const handleDelete = (id) => {
    console.log("--->",id);
//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("uid", id);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://cdn.tauschtakel.de/admin-user/delete", requestOptions)
//   .then(response => response.text())
//   .then(result => {
//     fetchData();
//     setIsPopupOpen(false)
//   })
//   .catch(error => console.log('error', error));
  };

  const handleApproveUser = (id) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("uid", id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-user/approveUser", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
  };





  const fetchData = async () => {
    const url = "https://cdn.tauschtakel.de/admin-user/getAll";
    const response = await fetch(url);
    const data = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        const handleDeleteClick = () => {
          handleDeletePopup(params.row._id)
        }
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.uid}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row._id)}
              onClick={() => handleDeleteClick(params.row._id)}
            >
              Delete
            </div>
            {
              params.row.verified === false ? <div
              className="ABCutton"
              onClick={() => handleApproveUser(params.row._id)}
            >
              Approve
            </div> : null
            }
            
          </div>
        );
      },
    },
  ];


 const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 188,
      renderCell: (params) => {
        const handleImageClick = () => {
          handleOpenPopup(params.row.image)
        }
        return (
          <div className="cellWithImg">
         
         <img
            className="cellImg"
            src={params.row.image}
            alt="avatar"
            onClick={handleImageClick}
          />
     
            <Link to={params.row._id}  style={{textDecoration: 'none', color:'gray'}}>
            {params.row.username}
            </Link>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.email}
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
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.createdAt}
          </div>
        );
      },

    }
  ];
  

  return (
    <div className="datatable">
      <div className="datatableTitle">
        User
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
    <div style={{ pointerEvents: isDeletePopupOpen ? "none" : "auto" }}>
      {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

      <Popup open={isDeletePopupOpen} onClose={handleDeleteClosePopup1} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px", display:'flex', alignItems:'center', justifyContent:'center' }}>
         
            <div style={{width:'70%', height:'50px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <button style={{width:'200px', backgroundColor: "crimson", color:'white'}} onClick={() => handleDeleteClosePopup1("Yes")}>Yes</button>
            <button style={{width:'200px'}} onClick={() => handleDeleteClosePopup1("No")}>No</button>
            </div>
            
       
        </div>
      </Popup>
    </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn) }
        pageSize={50}
        rowsPerPageOptions={[50]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;

