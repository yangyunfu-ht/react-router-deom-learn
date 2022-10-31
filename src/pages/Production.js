import React from "react";
import { useNavigate } from "react-router-dom";

export default function Production () {
  const navigation = useNavigate()
  const handelNavigate = () => {
    navigation('/productDetail/222') // push
    // navigation('/productDetail/222', { replace: true }) // replace
    // navigation(-1) // 路由返回（回退）
  }

  return (
    <div className="production">
      我是production组件

      <button onClick={ handelNavigate }>跳转到商品详情</button>
    </div>
  )
}