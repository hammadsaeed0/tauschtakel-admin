import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Datatable = () => {
  const [data, setData] = useState([]);

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
