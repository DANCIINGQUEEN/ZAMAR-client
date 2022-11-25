import React from 'react';
import styled from "styled-components";
// const Logo = styled.p`
//     align-items: center;
//     justify-content:flex-start;
//     font-weight:bold;
//     font-size:27px;
//     margin-left:20px;
// `

 const Logo=() =>{
    return (
        <div style={{
            alignItems: "center",
            justifyContent:"flex-start",
            fontWeight:"bold",
            fontSize:"27px",
            marginLeft:"20px",
        }}>
            <span style={{color:"black"}}>Z</span>
            <span style={{color:"#3ea6ff"}}>A</span>
            <span style={{color:"black"}}>M</span>
            <span style={{color:"#3ea6ff"}}>A</span>
            <span style={{color:"black"}}>R</span>

        </div>
    );
}

export default Logo;