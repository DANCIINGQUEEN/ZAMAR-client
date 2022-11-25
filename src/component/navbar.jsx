import React, {useState} from "react";
import styled from "styled-components";
import LogInModal from "./logInModal";
import Logo from './Logo'
const Container = styled.div`

    display:flex;
    justify-content: space-between;
    align-items: center;
    height:50px;`
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




const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <Container>
            <a href="/" style={{textDecoration:"none"}}>
                <Logo/>
            </a>

            <p style={{textDecoration: "none", float: "right"}}>
                <Button onClick={openModal}>
                    SIGN IN
                </Button>
            </p>

            <LogInModal open={modalOpen} close={closeModal}>



            </LogInModal>


        </Container>
    );
};

export default Navbar;
