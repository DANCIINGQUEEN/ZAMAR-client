import React from 'react';
import {Link} from "react-router-dom";


import styled from "styled-components";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import Logo from './Logo'

const LogIn = (props) => {

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div >

                <section>

                    <main>
                        <div className="loginContainer">

                            <div className="signInOtherAccount">
                                <button className="signInFacebook"><FacebookRoundedIcon style={{position: 'relative', top:'2px'}}/> <span>Sign in with Facebook</span></button>
                                <button className="signInGoogle"><GoogleIcon style={{ position: 'relative', top:'2px', right:'10px'}}/>Sign in with Google</button>
                            </div>
                            <input type="text" placeholder="Enter your Email" name="email" required/>

                            {/*<label htmlFor="psw"><b>Password</b></label>*/}
                            <input type="password" placeholder="Password" name="psw" required/>

                            <span className="psw">Forgot your <Link to="/findpassword">password?</Link></span>
                            <button className="signInButton" type="submit">Sign In</button>

                            <div>Don't have an account? <Link to='/createaccount'>Create an account</Link></div>

                        </div>
                    </main>
                </section>

        </div>
    );
};

export default LogIn;