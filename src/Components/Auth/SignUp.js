import React, { Component } from 'react';
import "./Signup.css";
import Strapi from 'strapi-sdk-javascript';

 class SignUp extends Component {
    state={
        firstname:" ",lastname:" ",
        email:" ",password:" ",loading:false
    }
    
    
    

    render() {
        return (
        <div className="container">

        <form>
            <h3>Register</h3>

            <label>
                <p class="label-txt">FIRST NAME</p>
                <input type="text" class="input" />
                
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>

            <label>
                <p class="label-txt">LAST NAME</p>
                <input type="text" class="input" />
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>

        
        {/* email */}
        <label>
            <p class="label-txt">ENTER YOUR EMAIL</p>
            <input type="text" class="input" />
            <div class="line-box">
                <div class="line"></div>
            </div>
        </label>

            
            

            <label>
                <p class="label-txt">ENTER YOUR PASSWORD</p>
                <input type="text" class="input" />
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>

            <button type="submit">submit</button>
        </form>

            </div>
        )
    }
}
export default SignUp;