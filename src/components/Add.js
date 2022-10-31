import React from "react";

class Add extends React.Component {
  state = {
    value: "",
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
   this.props.add(this.state.value)
   this.setState({ value: ''})
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Add;
