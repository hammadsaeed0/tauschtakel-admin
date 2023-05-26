import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { dealColumns } from "../table/dealtablesource";

const DealDataTable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item._id !== id));
    // console.log(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://cdn.tauschtakel.de/admin-deal/AllDeals";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.deals);
      setData(data.deals);
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
        Deal
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={dealColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DealDataTable;
