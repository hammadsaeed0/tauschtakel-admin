import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import InsertDataTable from "../../components/datatable/InsertTable"

const Interest = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <InsertDataTable/>
      </div>
    </div>
  )
}

export default Interest