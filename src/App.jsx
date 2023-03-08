import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import routers from "./router/index"

const App = () => {
  return (
    <Router>
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
            />
          );
        })}
      </Routes>
    </Router>
  );
};
export default App