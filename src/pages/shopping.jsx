import React from 'react';
class ShoppingList extends React.Component{
  /**
   * 非受控组件
   * */ 
  constructor(){
    super() 

    //创建ref
    this.txtRef = React.createRef()

  }
  handleBtn=()=>{
    console.log(this.txtRef.current.value);
  }
  render(){
    return(
      <div className="shopping-list">
      <h1>Shopping List for {this.props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
      <input type="text" ref={this.txtRef}/>
      <button onClick={this.handleBtn}>获取文本框的值</button>
      </div>
    )
  }
}
export default ShoppingList