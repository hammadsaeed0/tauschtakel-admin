import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PendingArticleTable from "../../components/datatable/PendingArticleTable"

const AllPendTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PendingArticleTable/>
      </div>
    </div>
  )
}

export default AllPendTable