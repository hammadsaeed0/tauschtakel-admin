import "./list.scss"
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"
import Datatable from "../datatable/Datatable"
import ArticleTable from "../datatable/ArticleTable"
import NotificationTable from "../datatable/notificationTable"
import { useLocation, useParams } from "react-router-dom"
import { useState } from "react"




const SingleNotification = () => {
  const [Id, setId] = useState()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  setId(Id)
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <NotificationTable />
      </div>
    </div>
  )
}

export default SingleNotification