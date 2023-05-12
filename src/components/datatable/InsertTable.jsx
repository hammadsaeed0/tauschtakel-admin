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
    // setData(data.filter((item) => item._id !== id));
    // console.log(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://3.75.129.124:3000/admin-interest/getAll";
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    };
    fetchData();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
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
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default InsertDataTable;
