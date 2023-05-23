import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { dealColumns } from "../table/dealtablesource";
import { InterestColumns } from "../table/interesttablesource";

const InsertDataTable = () => {
  const [data, setData] = useState([]);





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

fetch("https://cdn.tauschtakel.de:3000/admin-interest/delete", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
  };









  const fetchData = async () => {
    const url = "https://cdn.tauschtakel.de:3000/admin-interest/getAll";
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
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to={`/interest/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
      Interest
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={InterestColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default InsertDataTable;
