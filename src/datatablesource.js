import { Link } from "react-router-dom";

export const userColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
       
          <img className="cellImg" src={params.row.image} alt="avatar" />
   
          <Link to={params.row._id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.username}
          </Link>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.email}
        </div>
      );
    },
  },
];
