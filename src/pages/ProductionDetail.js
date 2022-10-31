import React from "react";
import { useParams } from "react-router-dom"

export default function ProductionDetail () {
  const { id } = useParams();
  console.log(id)

  return (
    <div className="production-detail">
      产品详情页
    </div>
  )
}