import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
/* 
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Production from "./pages/Production.js";
import ProductionDetail from "./pages/ProductionDetail.js";
import PageNotFound from "./pages/PageNotFund.js";
import Message from "./pages/Message.js";
import MessageUs from "./pages/MessageUs.js";
import JoinUs from "./pages/JoinUs.js";
*/


// ----------------------------------------------------------------
// 第二种路由声明使用方式，抽离使用编程式，更好的结合动态路由
import GenreateRoutes from "./router/genreateRoutes.js";

/**
// react-router-dom生成页面路由方式一: 直接在dom结构中声明
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}>
              about
            </NavLink>
            <NavLink
              to="/production"
              className={({ isActive }) => (isActive ? "active" : "")}>
              production
            </NavLink>
            <NavLink
              to="/production/1"
              className={({ isActive }) => (isActive ? "active" : "")}>
              production-detail
            </NavLink>
            <NavLink
              to="/message"
              className={({ isActive }) => (isActive ? "active" : "")}>
              message
            </NavLink>
          </header>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/production" element={<Production />}></Route>
              <Route
                path="/production/:id"
                element={<ProductionDetail />}></Route>
              <Route path="/message" element={<Message />}>
                <Route index element={<JoinUs />}></Route>
                <Route path="us" element={<MessageUs />}></Route>
                <Route path="join" element={<JoinUs />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </main>
          <footer className="footer">footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
 */


const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <NavLink to="/">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/product">产品</NavLink>
        </header>
        <main className="main">
          <GenreateRoutes></GenreateRoutes>
        </main>
        <footer className="footer">footer</footer>
      </div>
    </Router>
  )
}

export default App;