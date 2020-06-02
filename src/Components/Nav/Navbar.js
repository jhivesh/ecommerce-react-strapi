import React from 'react';
import { Link, withRouter } from "react-router-dom"

import home from "./../../assets/home.svg";
import cart from "./../../assets/shopping-cart.svg";
import user from "./../../assets/user.svg";

import { ButtonContainer } from "../Styled/Button";
import { NavWrapper } from "../Styled/NavWraper";



 function Navbar() {
    return (
        <div className="container">

                {/* a light navbar that is responsive for large devices */}
                <NavWrapper className="navbar navbar-expand-md bg-inverse " role="navigation" >

                    {/* <ul className="navbar-nav mr-auto align-items-center">
                        <img src={logo} height="50" alt="logo" />
                        <div className="navbar-brand">
                            <Link to="/">CoolBrand</Link>
                        </div>
                    </ul> */}

                    <div className="mx-0 ">
                        <a className="navbar-brand mx-auto">
                        <Link to="/">
                            <img src={home} height="25" alt="logo" class="pr-2"/>
                            <div className="navbar-brand">
                                    Home                               
                            </div>
                         </Link>
                        </a>

                    </div>



                    {/* center nav link products and mycarts */}
                    <div className="mx-0 ">
                        <a className="navbar-brand nav-link-ltr mx-auto">
                            <Link to="/products">Products</Link>
                        </a>
                    </div>

                    <div className="mx-0 ">
                        <a href="#" className="navbar-brand  mx-auto">
                            <span className="p-4 nav-link-ltr">
                               <Link to="/mycart">
                                <img src={cart} height="25" atl="logo" />
                                    MyCart
                                </Link>
                            </span>
                        </a>

                    </div>
                    
                        <div className="ml-3 nav-link-ltr">
                            <ButtonContainer>
                                <img src={user} height="25" atl="user" />
                                <Link to="/login">Login</Link>
                            </ButtonContainer>
                        </div>

                        <div className="mx-3">
                            <ButtonContainer>
                                <Link to="/signup">Sign up</Link>
                            </ButtonContainer>
                        </div>





                    {/* login and sign up button */}
                    {/* <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <ButtonContainer>
                                        <img src={user} height="25" atl="user" />
                                        <Link to="/login">Login</Link>
                                    </ButtonContainer>
                                </a>
                            </li>

                            <li class="nav-item">
                                <div class="nav-link" href="#">
                                    <ButtonContainer>
                                        <Link to="/signup">Sign up</Link>
                                    </ButtonContainer>
                                </div>
                            </li>

                        </ul>
                    </div> */}
                </NavWrapper>
            </div>
    )
}
export default withRouter(Navbar);