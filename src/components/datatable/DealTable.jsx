import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { dealColumns } from "../table/dealtablesource";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const DealDataTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item._id !== id));
    // console.log(id);
  };

  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id)
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

 const dealColumns = [
  {
    field: "user",
    headerName: "Person 1",
    width: 200,
    renderCell: (params) => {
      const handleImageClick1 = () => {
        handleOpenPopup(params.row.person1Data.image)
      }
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.person1Data.image}
            alt="avatar"
            onClick={handleImageClick1}
          />
          <Link to={params.row.person1Id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.person1}
          </Link>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Person 2",
    width: 200,
    renderCell: (params) => {
      const handleImageClick1 = () => {
        handleOpenPopup(params.row.person2Data.image)
      }
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.person2Data.image}
            alt="avatar"
            onClick={handleImageClick1}
          />
          <Link to={params.row.person2Id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.person2}
          </Link>
        </div>
      );
    },
  },
  {
    field: "article1",
    headerName: "Article 1",
    width: 200,
    renderCell: (params) => {
      const handleImageClick1 = () => {
        handleOpenPopup(params.row.article1Data.image[0])
      }
      return (
        <div className="cellWithImg">
        <img
          className="cellImg"
          src={params.row.article1Data.image[0]}
          alt="avatar"
          onClick={handleImageClick1}
        />
        <Link to={`/article/${params.row.article1Id}`}  style={{textDecoration: 'none', color:'gray'}}>
        {params.row.article1}
        </Link>
      </div>
      );
    },
  },
  {
    field: "article2",
    headerName: "Article 2",
    width: 200,
    renderCell: (params) => {
      const handleImageClick1 = () => {
        handleOpenPopup(params.row.article2Data.image[0])
      }
      return (
        <div className="cellWithImg">
        <img
          className="cellImg"
          src={params.row.article2Data.image[0]}
          alt="avatar"
          onClick={handleImageClick1}
        />
        <Link to={`/article/${params.row.article2Id}`}  style={{textDecoration: 'none', color:'gray'}}>
        {params.row.article2}
        </Link>
      </div>
      );
    },
  },
  {
    field: "subcharge",
    headerName: "	Surcharge",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {params.row.surcharge}{" "}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {params.row.status}{" "}
        </div>
      );
    },
  },
  {
    field: "Created At",
    headerName: "Created At",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {params.row.createdAt}{" "}
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
        columns={dealColumns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DealDataTable;
