import React from "react";
import { useNavigate } from "react-router-dom"

function PageNotFound () {
  const Navigation = useNavigate();

  const handleBack = () => {
    Navigation('./about')
  }
  
  return (
    <div className="page-not-found">
      <p>页面不存在</p>
      <button onClick={handleBack}>返回</button>
    </div>
  )
}

export default PageNotFound;