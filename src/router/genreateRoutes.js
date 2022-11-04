import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Production from "../pages/Production.js";
import ProductionDetail from "../pages/ProductionDetail.js";
import Mine from "../pages/Mine.js";
import TransFormComponent from "../pages/TransForm.js";
import Redux from "../pages/Redux.js"

const GenreateRoutes = () => {
  return useRoutes([
    {
      path: "/",
      name: "首页",
      element: <Home/>
    },
    {
      path: "/about",
      name: "关于",
      element: <About/>
    },
    {
      path: "/product",
      name: "产品",
      element: <Production/>
    },
    {
      path: "/productDetail/:id",
      name: "产品详情",
      element: <ProductionDetail/>
    },
    {
      path: "/mine",
      name: "我的",
      element: <Mine/>
    },
    {
      path: "/redux",
      name: "redux",
      element: <Redux/>
    },
    {
      path: "/transForm",
      name: "过渡",
      element: <TransFormComponent/>
    }
  ])
}

export default GenreateRoutes;