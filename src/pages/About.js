import React from "react";
import FirstLevel from  "../context/firstLevel.js";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <FirstLevel />
        我是about组件
      </div>
    )
  }
}

export default About;
