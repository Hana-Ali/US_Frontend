// importing react
import React from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing user products container
import UserGallery from './UserGallery';
// importing styled
import styled from 'styled-components';
// importing bunny
import Bunny from './bunny.png';

const ProfileSideBar = styled.div`
    width: 20%;
    height: 100vh;
    position: fixed;
    background-color: black;
    position: fixed;
    border-right: 2px solid #fff;
`;

const ProfilePictureWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 0%,
        rgba(243, 172, 18, 1) 100%
    );
    border-radius: 50%;
    border: 5px solid #fff;
    width: 150px;
    height: 150px;
    top: 43%;
    left: 81%;
`;

const ProfilePictureImage = styled.img`
    position: absolute;
    clip-path: circle()
    height: 80%;
    width: 80%;
    z-index: 100;
`;

function Profile(props)
{
    return (
        <div>
            <ProfileSideBar>

                <ProfilePictureWrapper>
                    <ProfilePictureImage src={Bunny}/>
                </ProfilePictureWrapper>

            </ProfileSideBar>

            <UserGallery />

        </div>
    );
}

export default Profile;