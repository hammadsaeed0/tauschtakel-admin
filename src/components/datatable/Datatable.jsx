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


  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id)
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };


  const handleDelete = (id) => {
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

fetch("http://3.75.129.124:3000/admin-user/delete", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
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

fetch("http://3.75.129.124:3000/admin-user/approveUser", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
  };





  const fetchData = async () => {
    const url = "http://3.75.129.124:3000/admin-user/getAll";
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
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleNotification(params.row._id)}
              onClick={() => handleOpenPopup(params.row._id)}
            >
              Notification
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            {
              params.row.verified === false ? <div
              className="ApproveButton"
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

  return (
    <div className="datatable">
      <div className="datatableTitle">
        User
      </div>
      <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>
      {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

      <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
        <div style={{ background: "white", padding: "20px", borderRadius: "4px" }}>
          <h2>Popup Example</h2>
          <div>
            <h3>ID: {id}</h3>
            <p>Popup content goes here.</p>
            <button onClick={handleClosePopup}>Close Popup</button>
          </div>
        </div>
      </Popup>
    </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
