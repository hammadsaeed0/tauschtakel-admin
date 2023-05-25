import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import UList from "../../components/table/userTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InsertDataTable from "../../components/datatable/InsertTable";



const SingleInterest = () => {
  const {productId} = useParams();
  useEffect( async () => {
    const url = `http://3.75.129.124:3000/admin-interest/${productId}`;

const response = await fetch(url);

const text = await response.text();
let data = JSON.parse(text);
console.log("-------->",data);

  }, [])
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit1</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                // src={image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">INter</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Inter</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Interest</h1>
          <InsertDataTable />
        </div>
      </div>
    </div>
  );
};

export default SingleInterest;
