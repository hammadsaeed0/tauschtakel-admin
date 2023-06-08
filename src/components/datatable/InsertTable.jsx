import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { dealColumns } from "../table/dealtablesource";
import { InterestColumns } from "../table/interesttablesource";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const InsertDataTable = () => {
  const [data, setData] = useState([]);
  const [textInput1, setTextInput1] = useState();
  const [id, setId] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);



  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id)
  };
  const handleClosePopup = () => {
    // setIsPopupOpen(false);
    // console.log(textInput1);
    // console.log(id);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("title", textInput1);
urlencoded.append("id", id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-interest/edit", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data = JSON.parse(result);
    if(data.status === "success"){

    setIsPopupOpen(false);
 fetchData();
    }
  })
  .catch(error => console.log('error', error));
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

fetch("https://cdn.tauschtakel.de/admin-interest/delete", requestOptions)
  .then(response => response.text())
  .then(result => fetchData())
  .catch(error => console.log('error', error));
  };

  const handleEdit = (id) => {
    handleOpenPopup(id)
  };
const handleTextInput1Change = (event) =>{
  setTextInput1(event.target.value);
}

  const fetchData = async () => {
    const url = "https://cdn.tauschtakel.de/admin-interest/getAll";
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
              className="viewButton"
              onClick={() => handleEdit(params.row._id)}
            >
              Edit
            </div>
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
    <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>

      <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
        <div style={{ background: "transparent", padding: "20px", borderRadius: "4px" }}>
        <div>
      <input
        type="text"
        value={textInput1}
        onChange={handleTextInput1Change}
        placeholder="Name"
      />
      <br />
      {/* {selectedImage && <img style={{width: '100%', maxHeight: '300px', objectFit: 'contain'}} src={selectedImage} alt="Selected" />} */}
    </div>
            <button onClick={handleClosePopup}>Update Settings</button>
      
        </div>
      </Popup>
    </div>
      <div className="datatableTitle">
      Interest
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={InterestColumns.concat(actionColumn)}
        pageSize={50}
        rowsPerPageOptions={[50]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default InsertDataTable;
