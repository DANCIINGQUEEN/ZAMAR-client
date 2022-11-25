import React from 'react';
import './LoginModal.css'
import styled from "styled-components";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import Logo from './Logo'

const LogInModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <a href="/" style={{textDecoration: "none"}}>
                            <Logo/>
                        </a>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <div className="loginContainer">

                            <div className="signInOtherAccount">
                                <button className="signInFacebook"><FacebookRoundedIcon style={{position: 'relative', top:'2px'}}/> <span>Sign in with Facebook</span></button>
                                <button className="signInGoogle"><GoogleIcon style={{ position: 'relative', top:'2px', right:'10px'}}/>Sign in with Google</button>
                            </div>
                            <input type="text" placeholder="Enter your Email" name="email" required/>

                            {/*<label htmlFor="psw"><b>Password</b></label>*/}
                            <input type="password" placeholder="Password" name="psw" required/>

                            <span className="psw">Forgot your <a href="#">password?</a></span>
                            <button className="signInButton" type="submit">Sign In</button>

                            <div>Don't have an account? <a href="#">Create an account</a></div>

                        </div>
                    </main>
                </section>
            ) : null}
        </div>
    );
};

export default LogInModal;