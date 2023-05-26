import "./list.scss"
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"
import Datatable from "../datatable/Datatable"
import ArticleTable from "../datatable/ArticleTable"
import NotificationTable from "../datatable/notificationTable"


const SingleNotification = () => {
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