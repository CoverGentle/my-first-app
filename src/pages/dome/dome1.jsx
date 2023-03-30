// 生命周期（创建时）
import React from "react";

class LifeCreate extends React.Component{
  constructor(props){
    super(props)
    console.warn("生命周期钩子函数:constructor");
  }
  // 1.进行Dom操作
  // 2.进行ajax请求
  componentDidMount(){
    console.warn("生命周期钩子函数:componentDidMount");
  }
  handleClick=()=>{

  }
  render(){
    console.warn("生命周期钩子函数:render");
    return(
      <div className="dome1">
        <h1>统计打豆豆被打的次数：</h1>
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
}

export default LifeCreate