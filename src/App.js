import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';


import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Product/Details"
import Default from "./Components/Default";
import ProductList from "./Components/Product/ProductList";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import NavBar from "./Components/Nav/Navbar";
import ProfilePage from "./Components/Auth/ProfilePage";


class App extends Component {
  render() {
    const user  = null;
    return (
          
          <BrowserRouter>
          <NavBar/>
            
          <Route exact path="/" component={Product}></Route>
          <Route exact path="/phones" component={ProductList}></Route>
          <Route exact path="/mycart" component={Cart}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          {/* <Route  component={Default}></Route> */}
          </BrowserRouter>
        
       
      
        
    )
  }
}

export default App;