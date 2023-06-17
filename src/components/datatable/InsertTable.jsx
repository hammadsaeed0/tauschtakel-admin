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
  const [textInput2, setTextInput2] = useState();
  const [id, setId] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id);
  };
  const handleOpenPopupAdd = (id) => {
    setIsAddPopupOpen(true);
  };
  const handleDeleteClosePopup1 = (data) => {
    if (data === "Yes") {
      handleDeleteClosePopup();
    } else {
      setIsDeletePopupOpen(false);
    }
  };
  const handleAddClosePopup1 = (data) => {
    // if (data === "Yes") {
    //   handleDeleteClosePopup();
    //   fetchData()
    // } else {
    //   setIsDeletePopupOpen(false);
    // }
    setIsAddPopupOpen(false);

  };
  const handleDeletePopup = (id) => {
    setIsDeletePopupOpen(true);
    setId(id);
  };

  const handleDeleteClosePopup = () => {
    handleDelete(id);
  };

  const handleClosePopup = () => {
    if (!textInput1) {
      return setIsPopupOpen(false);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("title", textInput1);
      urlencoded.append("id", id);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("https://cdn.tauschtakel.de/admin-interest/edit", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let data = JSON.parse(result);
          if (data.status === "success") {
            setIsPopupOpen(false);
            setTextInput1("");
            fetchData();
          }
        })
        .catch((error) => console.log("error", error));
    }
  };
  const handleAddClosePopup = () => {
            // setIsAddPopupOpen(false);   
            if (!textInput2) {
                          setIsAddPopupOpen(false);   
            }else {
              var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("title", textInput2);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://cdn.tauschtakel.de/admin-interest/new", requestOptions)
  .then(response => response.text())
  .then(result => {
    fetchData();
            setIsAddPopupOpen(false);   

  })
  .catch(error => console.log('error', error));
            }
  };

  const handleDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://cdn.tauschtakel.de/admin-interest/delete", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setIsDeletePopupOpen(false);
        fetchData();
      })
      .catch((error) => console.log("error", error));
  };

  const handleEdit = (id) => {
    handleOpenPopup(id);
  };
  const handleAdd = (id) => {
    if (!isPopupOpen && !isDeletePopupOpen) {
      handleOpenPopupAdd();
    }
  };
  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };
  const handleTextInput2Change = (event) => {
    setTextInput2(event.target.value);
  };
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
        const handleDeleteClick = () => {
          handleDeletePopup(params.row._id);
        };
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
              // onClick={() => handleDelete(params.row._id)}
              onClick={() => handleDeleteClick(params.row._id)}
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
          <div
            style={{
              background: "transparent",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
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
      <div style={{ pointerEvents: isDeletePopupOpen ? "none" : "auto" }}>
        {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

        <Popup open={isDeletePopupOpen} onClose={handleDeleteClosePopup1} modal>
          <div
            style={{
              background: "transparent",
              padding: "20px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "50px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: "200px",
                  backgroundColor: "crimson",
                  color: "white",
                }}
                onClick={() => handleDeleteClosePopup1("Yes")}
              >
                Yes
              </button>
              <button
                style={{ width: "200px" }}
                onClick={() => handleDeleteClosePopup1("No")}
              >
                No
              </button>
            </div>
          </div>
        </Popup>
      </div>
      <div style={{ pointerEvents: isAddPopupOpen ? "none" : "auto" }}>
        {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

        <Popup open={isAddPopupOpen} onClose={handleAddClosePopup1} modal>
        <div
            style={{
              background: "transparent",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <div>
              <input
                type="text"
                value={textInput1}
                onChange={handleTextInput2Change}
                placeholder="Add New Interest"
              />
              <br />
              {/* {selectedImage && <img style={{width: '100%', maxHeight: '300px', objectFit: 'contain'}} src={selectedImage} alt="Selected" />} */}
            </div>
            <button onClick={handleAddClosePopup}>Add Interest</button>
          </div>
        </Popup>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="datatableTitle">Interest</div>

        <div className="AButton" onClick={handleAdd}>
          <p
            style={{ marginLeft: "15px", marginTop: "5px", position: "fixed" , fontSize:'14px' }}
          >
            Add New
          </p>
        </div>

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
