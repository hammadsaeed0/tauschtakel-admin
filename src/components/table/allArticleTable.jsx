import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import ArticleTable from "../datatable/ArticleTable"

const AllArticleTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ArticleTable/>
      </div>
    </div>
  )
}

export default AllArticleTable