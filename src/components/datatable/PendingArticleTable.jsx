import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleColumns } from "../table/articletablesource";
import { Penarticletablesource } from "../table/penarticletablesource";

const PendingArticleTable = () => {
  const [data, setData] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item._id !== id));
  // };

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://cdn.tauschtakel.de/admin-article/pendingArticles";
      const response = await fetch(url);
      const data = await response.json();
      setData(data.articles);
      console.log(data.articles);
    };
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
              className="deleteButton"
              // onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Approve</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row._id)}
            >
              Reject
            </div>
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
