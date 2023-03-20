
// 登录界面
import React from "react";
import {Card,Input,Button} from 'antd'
import "./login.scss"

class Login extends React.Component{
  constructor(props){
    super()
    this.state={
      title:"登录",
      username:"",
      password:"",
    }
  }
  //登录请求登录接口
  loginIn=()=>{
    const params = {
      username:this.state.username,
      password:this.state.password
    }
    this.props.history.push("/home");
    console.log(params,"登录");
  }
  // 输入内容
  handleForm=(e)=>{
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <div className="login">
        <Card className="login-card" title="登录">
        <div className="card-box">
        <div className="username">
          <Input placeholder="Basic usage" name="username" value={this.state.username} onChange={this.handleForm}/>
          </div>
          <br />
          <div className="password">
          <Input.Password placeholder="input password" name="password" value={this.state.password} onChange={this.handleForm}/>
          </div>
          <br />
          <div className="login-btn">
            <Button type="primary" onClick={this.loginIn}>登录</Button>
          </div>
        </div>
        </Card>
      </div>
    )
  }
}
export default Login