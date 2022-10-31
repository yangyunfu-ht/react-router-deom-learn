import React from "react";

class Home extends React.Component {
  constructor (props) {
    super(props);
    // console.log("Home constructor")
    this.state = {
      msg: '初始值'
    }
  }

  // componentWillMount () {
  //   console.log("Home componentWillMount")
  // }

  // componentDidMount () {
  //   console.log("Home componentDidMount")
  // }


  // shouldComponentUpdate (nextProps) {
  //   console.log(nextProps, "shouldComponentUpdate")
  //   return true
  // }

  // componentWillUnmount () {
  //   console.log("Home componentWillUnmount", "home 组件卸载")
  // }


  render() {
    const { msg } = this.state;
    return (
      <div className="home">
        我是home组件{ msg }
        <button onClick={this.changValue}>change msg value</button>
      </div>
    )
  }

  changValue = () => {
    this.setState({
      msg: '我是更改后的值'
    })
  }
}

export default Home;

/**组件生命周期执行顺序**/
/* 1. constructor
2. componentWillMount
3. componentDidMount
3. render
 */

/* 组件更新渲染顺序
shouldComponentUpdate
render */
