import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeText, deleteText } from "./footerSlice";

const Footer = () => {
  const state = useSelector(state => state.footer.value)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{ state }</p>
      <button onClick={ () => dispatch(changeText('change')) }>修改footer</button>
      <br/>
      <button onClick={ () => dispatch(deleteText('delete')) }>删除footer</button>
    </div>
  )
}

export default Footer;