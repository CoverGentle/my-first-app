import React from "react"
class Nav extends React.Component{
  menuBtn(){
    console.log("我点击了菜单栏");
  }
  render(){
    console.log(this.props);
    return(
      <div>
        nav:{this.props.name}
        <button className="navBtn" onClick={this.menuBtn}>
          子组件按钮
        </button>
      </div>
    )
  }
}
export default Nav