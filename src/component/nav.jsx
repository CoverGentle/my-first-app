import React from "react"
class Nav extends React.Component{
  state={
    msg:"儿子交父亲刷抖音"
  }
  menuBtn(){
    console.log("我点击了菜单栏");
  }
  handleFatherBtn=()=>{
    this.props.getMsg(this.state.msg)
  }
  render(){
    console.log(this.props);
    return(
      <div>
        nav:{this.props.name}
        <button className="navBtn" onClick={this.menuBtn}>
          子组件按钮
        </button>
        <button onClick={this.handleFatherBtn}>子组件调用父组件方法</button>
      </div>
    )
  }
}
export default Nav