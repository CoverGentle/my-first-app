import React from "react";

class Buy extends React.Component {
  /**
   * 评论列表案例
   * */
  constructor() {
    super()
    this.state = {
      comments: [
        { id: 1, name: "jack", context: "沙发。。。。" },
        { id: 2, name: "rose", context: "沙发1。。。。" },
        { id: 3, name: "tom", context: "沙发2。。。。" }
      ],
      // 评论人
      userName:"",
      // 评论内容
      userContent:"",
    }
  }
  renderList = () => {
    return this.state.comments.length === 0 ? (<div className="no-content">
      暂无评论。。。
    </div>) : (<div className="textList">
      <ul>
        {this.state.comments.map(item => <li key={item.id}>{item.name}<br />{item.context}</li>)}
      </ul>
    </div>)
  }
  
  // 处理表单元素值
  handleForm=(e)=>{
    const {name,value} = e.target
    this.setState({
      [name]:value
    })
  }

  // 发表事件
  handleAdd = () => { 
    console.log("发表");
    const{comments,userName,userContent} = this.state
    if(userContent===""&&userContent===""){
      alert("请输入内容")
    }else{
      const newComents = [{
        id:Math.random(),
        name:userName,
        context:userContent
      },...comments]
      this.setState({
        comments:newComents,
        userName:"",
        userContent:""
      })
      console.log(newComents);
    }
    
    
  }
  render () {
     const {userName,userContent} = this.state
    return (
      <div className="buy">
        <div className="user">
          <input type="text" placeholder="请输入评论人" value={userName} name="userName" onChange={this.handleForm}/>
        </div>
        <div>
          <textarea className="content" cols="30" rows="10" placeholder="请输入评论内容" value={userContent} name="userContent" onChange={this.handleForm}></textarea>
        </div>
        <button onClick={this.handleAdd}>发表</button>
        {/* 通过条件渲染决定渲染什么内容 */}
        {
          this.renderList()
        }
        {/* {
          this.state.comments.length === 0 ? (<div className="no-content">
            暂无评论。。。
          </div>) : (<div className="textList">
            <ul>
              {this.state.comments.map(item => <li key={item.id}>{item.name}<br />{item.context}</li>)}
            </ul>
          </div>)
        } */}


      </div>
    )
  }
}

export default Buy