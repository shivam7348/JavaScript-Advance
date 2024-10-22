import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/Order/Order';
import  Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/Dashboard';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';

export default function App() {
  return (
    <MyState>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </Router>
    </MyState>
    
  );
}
