import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import routes from "./routes"
// const setTitle = (title)=>{
//   console.log(title);
//   document.title = title
// }

class RooterView extends Component{
  render(){
    return(
      <Router>
        <Routes>
        {routes.map((item, index) => {
          return (
             <Route
               key={index}
               exact
               path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
              // onEnter={setTitle(item.meta.title)}
             />
           );
         })}
        </Routes>
      </Router>
    )
  }
}
export default RooterView

