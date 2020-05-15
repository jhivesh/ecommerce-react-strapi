import React, { Component } from 'react';
import { Link,withRouter } from "react-router-dom"

import logo from "./../../assets/logo.png";
import cart from "./../../assets/cart.svg";
import user from "./../../assets/user.svg";

import { ButtonContainer } from "../Styled/Button";
import { NavWrapper } from "../Styled/NavWraper";


class Navbar extends Component {

    render() {
        return (
            <div className="container">

                {/* a light navbar that is responsive for large devices */}
                <NavWrapper className="navbar navbar-expand-md navbar-light sticky-top" role="navigation" >

                    {/* <ul className="navbar-nav mr-auto align-items-center">
                        <img src={logo} height="50" alt="logo" />
                        <div className="navbar-brand">
                            <Link to="/">CoolBrand</Link>
                        </div>
                    </ul> */}

                    <div className="mx-0 ">
                        <a className="navbar-brand mx-auto">
                            <img src={logo} height="50" alt="logo" />
                            <div className="navbar-brand">
                                <Link to="/">CoolBrand</Link>
                            </div>
                        </a>

                    </div>



                    {/* center nav link products and mycarts */}
                    <div className="mx-0 ">
                        <a className="navbar-brand nav-link-ltr mx-auto">
                            <Link to="/phones">Phones</Link>
                        </a>
                    </div>

                    <div className="mx-0 ">
                        <a href="#" className="navbar-brand  mx-auto">
                            <span className="p-4 nav-link-ltr">
                                <img src={cart} height="40" atl="logo" />
                                <Link to="/mycart">MyCart</Link>
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
}

export default withRouter(Navbar);


// const NavWrapper = styled.nav`

//  background-color :var(--mainBlue);
//  .navlink{
//      color:var(Blue);
//      font-size:1.3rem;
//      text-transform: capitalize;
//  }

//     color:var(red);
//     font-size:1.3rem;
//     text-transform: capitalize;


// `