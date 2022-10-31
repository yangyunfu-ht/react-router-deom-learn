import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Production from "../pages/Production.js";
import ProductionDetail from "../pages/ProductionDetail.js";

const GenreateRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/product",
      element: <Production/>
    },
    {
      path: "/productDetail/:id",
      element: <ProductionDetail/>
    }
  ])
}

export default GenreateRoutes;