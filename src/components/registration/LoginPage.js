// Importing react
import React, { useState, useEffect } from 'react';
// Importing the styles
import styled from 'styled-components';
// Importing the LoginForm
import LoginForm from './LoginForm';
// Importing motion
import { motion } from 'framer-motion';

// Container for the box
const FullContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Making the box style
const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

// container with backdrop and the content
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

// Making the backdrop
const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(68deg);
    top: -290px;
    left: -70px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg, 
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%
    );
`;

// Making the header container
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

// Styles for the header
const HeaderText = styled.h2`
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

// Styles for the smaller text
const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

// For what would be inside as forms and so
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8rem;
`;

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

function AccountBox(props)
{
    return(
        <FullContainer
        variants={initialContainer}
        initial="hidden"
        animate="show"
        >
            <BoxContainer>

                <TopContainer>
                    <BackDrop />
                    <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please sign-in to continue!</SmallText>
                    </HeaderContainer>
                </TopContainer>

                <InnerContainer>
                    <LoginForm />
                </InnerContainer>

            </BoxContainer>
        </FullContainer>
    );   
}

export default AccountBox;