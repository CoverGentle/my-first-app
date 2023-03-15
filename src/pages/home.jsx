import React from "react";

class Home extends React.Component{
  list = [
    {id:1,name:"痴心绝对"},
    {id:2,name:"痴心妄想"},
    {id:3,name:"列表渲染"}
  ]
  constructor(props){
    super(props)
    this.state = {date:new Date()}  
  }
  trick(params) {
    setInterval(() => {
      console.log(1);
    }, 1000);
  }
  render(){
    return(
      /**
       * 区分js语句与js表达式
       * 1.表达式：一个表达式会产生一个值，可以放在热河一个需要值的地方
       * 下面这些都是表达式
       * (1)a
       * (2)a+b
       * (3)demo(1)
       * (4)arr.map()
       * (5)function test(){}
       * 2.语句
       * 下面这些都是语句
       * (1)if()
       * (2)for(){}
       * (3)switch(){case:xxxx}
       * */ 
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
            {this.list.map(item=><li key={item.id}>{item.name}</li>)}
          </ul>
      </div>
    )
  }
   
}

export default Home