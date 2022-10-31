import React from "react";

class list extends React.Component {
  handleClick =(e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    const { personList } = this.props;
    return (
      <ul>
        {
          personList.map((item, index) => {
            return (
              <li key={index} onClick={ (e) => this.handleClick(e)}>{item}</li>
            )
          })
        }
      </ul>
    )
  }
}

export default list;