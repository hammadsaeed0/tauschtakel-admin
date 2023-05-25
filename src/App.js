import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
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
            <Route path="deal" element={<AllDealTable />} />
            <Route path="article" element={<AllArticleTable />} />
            <Route path="notification" element={<Notification />} />
            <Route path="pendingArticle" element={<AllPendTable />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
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
