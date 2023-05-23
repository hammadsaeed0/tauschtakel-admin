import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleColumns } from "../table/articletablesource";

const Datatable = () => {
  const [data, setData] = useState([]);

  const handleApprove = async(id) => {
    const url = 'http://3.75.129.124:3000/admin-article/approvedArticles';

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text)
setData(data.articles)
  };
  const handlePending = async(id) => {
    const url = 'http://3.75.129.124:3000/admin-article/pendingArticles';

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text)
setData(data.articles)
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://3.75.129.124:3000/admin-article/approvedArticles";
      const response = await fetch(url);
      const data = await response.json();
      setData(data.articles);
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
              // onClick={() => handleDelete(params.row._id)}
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
        Articles
        <div className="setBtn">
        <div className="link" onClick={() => handleApprove()}>
          Approved
        </div>
        <div className="link2" onClick={() => handlePending()}>
          Pending
        </div>
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={ArticleColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
