import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

 const Production = () => {
  const navigation = useNavigate()
  const handelNavigate = () => {
    navigation('/productDetail/222') // push
    // navigation('/productDetail/222', { replace: true }) // replace
    // navigation(-1) // 路由返回（回退）
  }

  const [count , setCount] = useState(0)
  const [produce, setProduct] = useState({ name: 'production', age: 3000 })

  const handdleIncremennt = () => {
    setCount(count + 1)
  }

  const handdleChange = () => {
    setProduct({
      name: 'hello world',
      age: 100
    })
  }

  useEffect(() => {
    document.title = `you clicked ${count} times`
  }, [produce, count])

  const { name, age } = produce
  return (
    <div className="production">
      production组件
      <br/>
      { count }
      <br/>
      <button onClick={ handdleIncremennt }>点击加一</button>
      <br/>
      <button onClick={ handelNavigate }>跳转到商品详情</button>
      <p>{ name } { age }</p>
      <button onClick={ handdleChange }>change produce</button>
    </div>
  )
}

export default Production;