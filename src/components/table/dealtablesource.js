import { Link } from "react-router-dom";
export const dealColumns = [
  {
    field: "user",
    headerName: "Person 1",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.person1Data.image}
            alt="avatar"
            // onClick={handleImageClick1}
          />
          <Link to={params.row.person1Id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.person1}
          </Link>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Person 2",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.person2Data.image}
            alt="avatar"
            // onClick={handleImageClick1}
          />
          <Link to={params.row.person2Id}  style={{textDecoration: 'none', color:'gray'}}>
          {params.row.person2}
          </Link>
        </div>
      );
    },
  },
  {
    field: "article1",
    headerName: "Article 1",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
        <img
          className="cellImg"
          src={params.row.article1Data.image[0]}
          alt="avatar"
          // onClick={handleImageClick1}
        />
        <Link to={`/article/${params.row.article1Id}`}  style={{textDecoration: 'none', color:'gray'}}>
        {params.row.article1}
        </Link>
      </div>
      );
    },
  },
  {
    field: "article2",
    headerName: "Article 2",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
        <img
          className="cellImg"
          src={params.row.article2Data.image[0]}
          alt="avatar"
          // onClick={handleImageClick1}
        />
        <Link to={`/article/${params.row.article2Id}`}  style={{textDecoration: 'none', color:'gray'}}>
        {params.row.article2}
        </Link>
      </div>
      );
    },
  },
  {
    field: "subcharge",
    headerName: "	Surcharge",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {params.row.surcharge}{" "}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {params.row.status}{" "}
        </div>
      );
    },
  },
  {
    field: "Created At",
    headerName: "Created At",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {" "}
          {params.row.createdAt}{" "}
        </div>
      );
    },
  },
]; //temporary data export const userRows = [ { id: 1, username: "Snow", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", status: "active", email: "1snow@gmail.com", age: 35, }, { id: 2, username: "Jamie Lannister", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "2snow@gmail.com", status: "passive", age: 42, }, { id: 3, username: "Lannister", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "3snow@gmail.com", status: "pending", age: 45, }, { id: 4, username: "Stark", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "4snow@gmail.com", status: "active", age: 16, }, { id: 5, username: "Targaryen", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "5snow@gmail.com", status: "passive", age: 22, }, { id: 6, username: "Melisandre", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "6snow@gmail.com", status: "active", age: 15, }, { id: 7, username: "Clifford", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "7snow@gmail.com", status: "passive", age: 44, }, { id: 8, username: "Frances", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "8snow@gmail.com", status: "active", age: 36, }, { id: 9, username: "Roxie", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "snow@gmail.com", status: "pending", age: 65, }, { id: 10, username: "Roxie", img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "snow@gmail.com", status: "active", age: 65, }, ];
