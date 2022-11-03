import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

 const ProductionDetail = () => {
  const [count, setCount] = useState(1)
  const style = {
    width: '100%',
    height: '300px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  const handleClick =  useCallback((value) => {

  }, [])

  const Navigate = useNavigate()

  const childeElement = useRef(null)

  const handleClickget = () => {
    console.log(childeElement.current.innerText)
  }

  return (
    <div className="production-detail" style={style}>
      <p>{ count }</p>
      <button ref={childeElement} onClick={ handleClickget }>获取dom节点</button>
      <button onClick={() => setCount(count + 1)}>父组件更新</button>
      产品详情页
      <ChildComponent click={ handleClick }/>
      <button onClick={ () => Navigate(-1) }>返回</button>
    </div>
  )
}

const ChildComponent = React.memo(({ click }) => {
  click()
  return (
    <div>
      ProductionDetailChild
    </div>
  )
})

export default ProductionDetail;