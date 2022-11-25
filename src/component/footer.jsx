import React from "react";
import styled from 'styled-components'
import Logo from './Logo'
const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:3vh;`
// const Logo = styled.p`
//     align-items: center;
//     font-weight:bold;
//     font-size:27px;
//     margin-bottom:10px;
// `

const Footer = () => {


    return (
        <Container>
            <a href="/" style={{textDecoration: "none"}}>
                <Logo/>
            </a>


        </Container>
    );
};

export default Footer;
