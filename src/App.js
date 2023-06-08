import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import SignleArtle from './pages/single/SingleArticle'
import SingleInterest from "./pages/single/SingleInterest";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import AllDealTable from "./components/table/allDealTable";
import AllArticleTable from "./components/table/allArticleTable";
import AllPendTable from "./components/table/allPendingTable";
import Interest from "./pages/list/Interest";
import Notification from "./components/table/notification";
import Reset from "./pages/login/reset";
import AdminProfile from "./pages/single/adminProfile";
import SingleArticle from "./pages/single/SingleArticle";
import OTP from "./pages/login/Otp";
import Backup from "./pages/single/Backup";



function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="reset" element={<Reset />} />
            <Route path="otp" element={<OTP />} />
            <Route path="admin" element={<AdminProfile />} />
            <Route path="backup" element={<Backup />} />
            <Route path="notification" element={<Notification />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="deal">
              <Route index element={<AllDealTable />} />
              <Route path=":userId" element={<Single />} />
              <Route path=":articleId" element={<SingleArticle />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="article">
              <Route index element={<AllArticleTable />} />
              <Route path=":articleId" element={<SignleArtle />} />
            </Route>
            <Route path="pendingArticle">
              <Route index element={<AllPendTable />} />
              <Route path=":articleId" element={<SignleArtle />} />
            </Route>

            <Route path="interest">
              <Route index element={<Interest />} />
              <Route path=":productId" element={<SingleInterest />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
