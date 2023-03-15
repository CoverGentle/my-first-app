import React from "react";
class Login extends React.Component{
  handleClick(e){
    e.preventDefault()  //阻止浏览器默认行为
    console.log("登录");
  }
 
  //方法一
  // constructor(){
  //   super()
  //   // 初始化state
  //   this.state = {
  //     count:0
  //   }
  // }
  // 方法二简化初始化state
  state = {
    count:0
  }
  render(){
    return(
      <div className="login">
        <div>
           <a href="https://www.baidu.com" onClick={this.handleClick}>登录</a>
        </div>
        <div>
          计数：{this.state.count}
        </div>
      </div>
    )
  }
}
export default Login 