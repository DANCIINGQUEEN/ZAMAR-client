import React, {useState} from "react";
import styled from "styled-components";
import LogInModal from "./logInModal";
import Logo from './Logo'
import {Link} from "react-router-dom";

const Container = styled.div`

    display:flex;
    justify-content: space-between;
    align-items: center;
    height:50px;
    border-bottom:2px dotted lightgray`
;


const Button = styled.button`
    padding: 7px 15px 3px;
    background-color: transparent;
    color: #3ea6ff;
    border:none;
    font-weight: bold;
    cursor: pointer;
    align-items: center;
    // gap: 5px;
    justify-content:flex-end;
    font-size:17px
  `;

const LinkButton = styled.div`
    margin-right:500px;
    
    `

const StyledLink=styled(Link)`
    text-decoration: none;
    font-size:20px;
    font-weight:bold;
    color:black;
    padding:30px;
    `




const Header = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <Container>
            <a href="/" style={{textDecoration: "none"}}>
                <Logo/>
            </a>
            <LinkButton>

                <StyledLink to='/functionOne'>
                    Sheet
                </StyledLink>

                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}

                <StyledLink to='/functionTwo'>
                    Band
                </StyledLink>
                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}

                <StyledLink to='/functionTwo'>
                    Lesson
                </StyledLink>
                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}

                <StyledLink to='/functionTwo'>
                    Cloud
                </StyledLink>
                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}

                <StyledLink to='/functionTwo'>
                    About
                </StyledLink>

            </LinkButton>

            {/*<p style={{textDecoration: "none", float: "right"}}>*/}
            {/*    <Button onClick={openModal}>*/}
            {/*        SIGN IN*/}
            {/*    </Button>*/}
            {/*</p>*/}

            {/*<LogInModal open={modalOpen} close={closeModal}>*/}


            {/*</LogInModal>*/}
            <StyledLink to='/login'>Sign In</StyledLink>


        </Container>
    );
};

export default Header;
