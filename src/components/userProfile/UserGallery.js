// importing React
import React, { useState } from 'react';
// importing motion
import { motion } from 'framer-motion';
// importing styled
import styled from 'styled-components';
// importing the close icon
import CloseIcon from '@material-ui/icons/Close';
// importing IndividualImages
import Img1 from '../../assets/images/userGalleryImages/img1.jpg';
import Img2 from '../../assets/images/userGalleryImages/img2.jpg';
import Img3 from '../../assets/images/userGalleryImages/img3.jpg';
import Img4 from '../../assets/images/userGalleryImages/img4.jpg';
import Img5 from '../../assets/images/userGalleryImages/img5.jpg';
import Img6 from '../../assets/images/userGalleryImages/img6.jpg';
// importing the css
import './UserGallery.css';

const ProfileMainContent = styled.div`
    width: 80%;
    margin-left: 16%;
    background-color: #fff;
    min-height: 100vh;
    display: grid;
`;

function UserGallery(props)
{
    let imageData = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img1
        },
        {
            id: 8,
            imgSrc: Img2
        },
        {
            id: 9,
            imgSrc: Img3
        },
        {
            id: 10,
            imgSrc: Img4
        },
        {
            id: 11,
            imgSrc: Img5
        },
        {
            id: 12,
            imgSrc: Img6
        },
        {
            id: 13,
            imgSrc: Img1
        },
        {
            id: 14,
            imgSrc: Img2
        },
        {
            id: 15,
            imgSrc: Img3
        },
        {
            id: 16,
            imgSrc: Img4
        },
        {
            id: 17,
            imgSrc: Img5
        },
        {
            id: 18,
            imgSrc: Img6
        },
        {
            id: 19,
            imgSrc: Img1
        },
        {
            id: 20,
            imgSrc: Img2
        },
        {
            id: 21,
            imgSrc: Img3
        },
        {
            id: 22,
            imgSrc: Img4
        },
        {
            id: 23,
            imgSrc: Img5
        },
        {
            id: 24,
            imgSrc: Img6
        }
    ]

    const [model, setModel] = useState(false);
    const[tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <ProfileMainContent>
            
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} />
                <CloseIcon onClick={() => setModel(false)}/>
            </div>

            <div className="gallery">

                {imageData.map((item, index) =>{
                    return(
                        <div className="pics" key={index} onClick={() =>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })}

            </div>

        </ProfileMainContent>
    );
}

export default UserGallery;