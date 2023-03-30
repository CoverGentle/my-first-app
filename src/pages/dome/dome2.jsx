// 生命周期(更新时)

import React from "react"
class LifeUpdate extends React.Component{
  constructor(props){
    super()
    this.state = {
      count:0,
    }
  }
  // 打豆豆
  handleClick=()=>{
    this.setState({
      count:this.state.count+1
    })

    // 强制更新 forceUpdate
    // this.forceUpdate()
  }
  render(){
    console.warn("生命周期钩子函数：render");
    return(
      <div>
      {
        this.state.count >3 ? <h1>豆豆被打死了。。。</h1> : <Counter count={this.state.count}/>
      }
      
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
}

class Counter extends React.Component{
  componentDidMount(){
    this.timeId = setInterval(()=>{
      console.log("定时器正在执行。。。");
    },500)
  }
  // 生命周期 组件从页面中消失卸载时关闭定时器
  componentWillUnmount(){
    clearInterval(this.timeId)
  }
  render(){
    console.warn("子组件---生命周期钩子函数：render");
    return(
      <div>
        <h1>打豆豆的次数：{this.props.count}</h1>
      </div>
    )
  }
  // 注意：如果调用setState()更新状态必须有放在一个if条件中
  // 因为：如果直接调用setState()更新状态，也会导致递归更新
  componentDidUpdate(prevProps){
    console.log("子组件---生命周期钩子函数：componentDidUpdate");
    // 错误更新
    // this.setState({})


    // 正确做法
    // 做法：比较更新前后的props是否相同，来决定是否重新渲染
    console.log("上一次的props",prevProps,",当前的props",this.props);
    // if(prevProps.count !== this.props){
    //   this.setState({})
    // }
  }
}
export default LifeUpdate