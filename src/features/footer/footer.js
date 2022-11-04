import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeText, deleteText } from "./footerSlice";

const Footer = () => {
  const state = useSelector(state => state.footer.value);
  const dispatch = useDispatch();

  const style = {
    margin: '10px',
    width: '60px'
  }

  const handleClickButton = (item) => {
    console.log(item);
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch(changeText("change"))}>修改footer</button>
      <br />
      <button onClick={() => dispatch(deleteText("delete"))}>删除footer</button>
      <div>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <button key={index} style={ style } onClick={() => handleClickButton(item)}>{item}</button>
        ))}
      </div>
      <FooterChild aria-labelledby={ 'footer' }>
        <div>go hello world1</div>
        <div>go hello world2</div>
        <div>go hello world3</div>
      </FooterChild>
    </div>
  );
};

const FooterChild = (props) => {
  console.log(props)
  return (
    <div>
      { props['aria-labelledby']}
      FooterChild
      { props.children[0] }
      <hr/>
      { props.children[1] }
      <hr/>
      { props.children[2] }
      <hr/>
    </div>
  )
}

export default Footer;
