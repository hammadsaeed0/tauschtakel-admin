import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const UList = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const url = "https://cdn.tauschtakel.de:3000/admin-deal/AllDeals";
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData.deals);
  }, []);
  return (
    <TableContainer component={Paper} className="table">
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
          {data.map((row , b) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{b+1}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {row.person1}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.person2}</TableCell>
              <TableCell className="tableCell">{row.article1}</TableCell>
              <TableCell className="tableCell">{row.article2}</TableCell>
              <TableCell className="tableCell">{row.surcharge}</TableCell>
              <TableCell className="tableCell">
                <span className={'status'}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UList;
