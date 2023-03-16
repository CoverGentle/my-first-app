import React from "react";
class Login extends React.Component{
  //方法一
  // constructor(){
  //   super()
  //   // 初始化state
  //   this.state = {
  //     count:0
  //   }
  // }
  // 方法二简化初始化state
 
  constructor(){
    super()
    this.state = {
      count:0,
      txt:"",
      city:"sh",
      checked:true
    }
    //使用bind方法改变this的指向
    // this.handleCount = this.handleCount.bind(this)
  }

  handleClick(e){
    e.preventDefault()  //阻止浏览器默认行为
    console.log("登录");
  }

  
  // handleCount(){
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }
  // 事件绑定this指向  箭头函数
  handleCount=()=>{
      this.setState({
      count:this.state.count+1
    })
  }
  // handleTxt=(e)=>{
  //   this.setState({
  //     txt:e.target.value
  //   })
  // }
  // handleCity=(e)=>{
  //   this.setState({
  //     city:e.target.value
  //   })
  // }
  // handleChecked=(e)=>{
  //   console.log(e,"checked");
  //   this.setState({
  //     checked:e.target.checked
  //   })
  // }

  handleChange=(e)=>{
    // 获取dom元素
    const target = e.target
    // 根据值类型获取值
    const value = target.type === "checkbox" ? target.checked : target.value
     
    // 获取name
    const name = target.name
    this.setState({
      [name]:value
    })
  }

   
  render(){
    return(
      <div className="login">
        <div>
           <a href="https://www.baidu.com" onClick={this.handleClick}>登录</a>
        </div>
        <div>
          计数：{this.state.count}
          <button onClick={this.handleCount}>+</button>
          <input type="text" name="txt" value={this.state.txt} onChange={this.handleChange}/>
          <select name="city" value={this.state.city} onChange={this.handleChange}>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="qd">启东</option>
          </select>
          <br/>
          <input type="checkbox" name="checked" checked={this.state.checked} onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}
export default Login 