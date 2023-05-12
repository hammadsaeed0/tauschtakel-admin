import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DealDataTable from "../datatable/DealTable"

const AllDealTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DealDataTable/>
      </div>
    </div>
  )
}

export default AllDealTable