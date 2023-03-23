import React from "react";
import Nav from "../component/nav"

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      childData: ""
    }
    this.list = [
      { id: 1, name: "痴心绝对" },
      { id: 2, name: "痴心妄想" },
      { id: 3, name: "列表渲染" }
    ]
    this.Nav = React.createRef()
  }
  trick (params) {
    setInterval(() => {
      this.sum = this.sum + 1
      console.log(this.sum);
    }, 1000);
  }
  handleMenu = () => {
    this.Nav.current.menuBtn()
    console.log("我是父组件点的");
  }
  // 提供一个回调函数，用来接受数据
  getChildMsg = (data) => {
    this.setState({
      childData : data
    })
    console.log("接收到子组件中传递过来的数据", data);
  }
  render () {
    return (
      <div className="homePge">
        <h3>主页</h3>
        <button onClick={this.trick}>按钮</button>
        <div>
          <ul>
            <li>首页</li>
            <li>买卖</li>
            <li>购物车</li>
          </ul>
        </div>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <ul>
          {this.list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
        {this.state.childData}
        <Nav name="这是菜单栏" ref={this.Nav} getMsg={this.getChildMsg} />
        <button onClick={this.handleMenu}>父组件的按钮</button>
      </div>
    )
  }

}

export default Home