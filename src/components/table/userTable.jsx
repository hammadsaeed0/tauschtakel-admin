import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const UList = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = (data) => {
    handleOpenPopup(data);
  };

  const handleOpenPopup = (id) => {
    setIsPopupOpen(true);
    setId(id);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(async () => {
    const url = "https://cdn.tauschtakel.de/admin-deal/AllDeals";
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData.deals);
    // console.log(data[0].article1Data.image[0]);
    // console.log(data[0].article2Data.image[0]);
    // console.log(data[0].person1Data.image);
    console.log(data[0]);
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <div style={{ pointerEvents: isPopupOpen ? "none" : "auto" }}>
        {/* <h1>My Component</h1>
      <button onClick={handleOpenPopup}>Open Popup</button> */}

        <Popup open={isPopupOpen} onClose={handleClosePopup} modal>
          <div
            style={{
              background: "transparent",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <img
              style={{
                width: "100%",
                maxHeight: "700px",
                objectFit: "contain",
              }}
              src={id}
              alt="avatar"
            />
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </Popup>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Person 1</TableCell>
            <TableCell className="tableCell">Person 2</TableCell>
            <TableCell className="tableCell">Article 1</TableCell>
            <TableCell className="tableCell">Article 2</TableCell>
            <TableCell className="tableCell">Surcharge</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, b) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{b + 1}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    className="image"
                    src={row.person1Data.image}
                    alt="avatar"
                    onClick={() => handleImageClick(row.person1Data.image)}
                  />
                  <Link
                    to={`/users/${row.person1Id}`}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    {row.person1}
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    className="image"
                    src={row.person2Data.image}
                    alt="avatar"
                    onClick={() => handleImageClick(row.person2Data.image)}
                  />
                  <Link
                    to={`/users/${row.person2Id}`}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    {row.person2}
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    className="image"
                    src={row.article1Data.image[0]}
                    alt="avatar"
                    onClick={() => handleImageClick(row.article1Data.image[0])}
                  />
                  <Link
                    to={`/article/${row.article1Id}`}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    {row.article1}
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    className="image"
                    src={row.article2Data.image[0]}
                    alt="avatar"
                    onClick={() => handleImageClick(row.article2Data.image[0])}
                  />
                  <Link
                    to={`/article/${row.article2Id}`}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    {row.article2}
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.surcharge}</TableCell>
              <TableCell className="tableCell">
                <span className={"status"}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UList;
