import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './pages/shopping';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingList></ShoppingList>
  </React.StrictMode>
)