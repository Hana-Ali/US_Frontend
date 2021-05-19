// importing react, useState
import React, { useState } from 'react';
// importing framer motion
import { motion } from 'framer-motion';
// importing styled
import styled from 'styled-components';
// importing the form
import ProfileUpdateForm from './ProfileUpdateForm';

// Container for the box
const FullUpdateContainer = styled(motion.div)`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// Making the box style
const BoxUpdateContainer = styled.div`
width: 500px;
height: 850px;
min-height: 600px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

// container with backdrop and the content
const TopUpdateContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

// Making the backdrop
const UpdateBackDrop = styled(motion.div)`
width: 100%;
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
const UpdateHeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

// Styles for the header
const UpdateHeaderText = styled.h2`
font-size: 50px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
line-height: 1.24;
color: #fff;
z-index: 10;
margin: 0;
`;

// For what would be inside as forms and so
const UpdateInnerContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1.8rem;
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

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

function ProfileUpdate(props) {
    return(
        <FullUpdateContainer
            variants={initialContainer}
            initial="hidden"
            animate="show"
        >
            <BoxUpdateContainer>

                <TopUpdateContainer>
                    <UpdateBackDrop />
                    <UpdateHeaderContainer>
                        <UpdateHeaderText>Update</UpdateHeaderText>
                        <UpdateHeaderText>Profile</UpdateHeaderText>
                        <SmallText>Please use your e-mail to update the account!</SmallText>
                    </UpdateHeaderContainer>
                </TopUpdateContainer>

                <UpdateInnerContainer>
                    <ProfileUpdateForm />
                </UpdateInnerContainer>

            </BoxUpdateContainer>
        </FullUpdateContainer>
    );
}

export default ProfileUpdate;