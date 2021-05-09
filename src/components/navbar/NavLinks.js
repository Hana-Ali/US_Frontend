// Importing react
import React from 'react';
// Importing styling
import styled from 'styled-components';
// Importing links
import navbarLinks from './MenuItems';

// Styling the container for the links
const LinksContainer = styled.div`
    display: flex;
    align-items: center;
`;

// Styling the ul components, or the menu
const LinksMenu = styled.ul`
    display: flex;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

// Styling each li
const LinksItem = styled.li`
    display: flex;
    vertical-align: top;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 0 1.1rem;
`;

// Styling each link 
const Link = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    margin: 0 2rem;

    &:hover{
        color: rgb(24, 23, 23);
    }

    &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: black;
        left: 0;
        bottom: -3px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .5s ease;
    }

    &:hover::after{
        transform: scaleX(1);
    }
`;

// Creating the navigation links component
function NavLinks(props) {
    return(
        // First we do the container
        <LinksContainer>
        {/* Inside the container, we have the menu of links, then the li, and finally links */}
            <LinksMenu>
            {/* Each link Menu has a bunch of items, with each item having a link */}
                {
                    navbarLinks.map(
                        (label) => {
                            return(
                                <LinksItem><Link href={label.path}>{label.title}</Link></LinksItem>
                            )
                        }
                    )
                }
            </LinksMenu>
        </LinksContainer>
    );
}

export default NavLinks;