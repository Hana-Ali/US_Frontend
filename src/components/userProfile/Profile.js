// importing react
import React from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing user products gallery
import UserGallery from './UserGallery';
// importing styled
import styled from 'styled-components';
// importing pics
import ProfilePic from '../../assets/images/userGalleryImages/crisalysSmaller.png';
import Background from '../../assets/images/userGalleryImages/background.jpg';

const ProfileSideBar = styled.div`
    width: 20%;
    height: 100vh;
    position: fixed;
    background-color: black;
    position: fixed;
    border-right: 2px solid #fff;
`;

const ProfileSideBarImage = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
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
    z-index: 100;
`;

const ProfilePictureImage = styled.img`
    position: absolute;
    clip-path: circle()
    height: 100%;
    width: 100%;
    z-index: 100;
`;

function Profile(props)
{
    return (
        <div>
            <ProfileSideBar>
                <ProfileSideBarImage src={Background} />
                <ProfilePictureWrapper>
                    <ProfilePictureImage src={ProfilePic}/>
                </ProfilePictureWrapper>

            </ProfileSideBar>

            <UserGallery />

        </div>
    );
}

export default Profile;