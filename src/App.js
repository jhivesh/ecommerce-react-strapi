import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
 
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import ProductList from "./Components/Product/ProductList";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import NavBar from "./Components/Nav/Navbar";
import Home from "./Components/Home/Home";
//======================================================

class App extends Component {
  render() {
    return (
          <Router>
            <NavBar/>
            <br/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={ProductList}></Route>
            <Route path="/product/:id" component={Product}></Route>
            <Route exact path="/mycart" component={Cart}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
          {/* <Route  component={Default}></Route> */}
          </Router>        
    )
  }
}
//==========================================================
export default App;