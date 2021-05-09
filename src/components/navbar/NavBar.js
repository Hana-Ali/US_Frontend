// Importing react
import React from "react";
// Importing styled to be able to style the page
import styled from "styled-components";
// Importing the logo
import Logo from "../logo/Logo";
// Importing the links
import NavLinks from "./NavLinks.js";

// ---------------------------- Stylizing the navbar using styled-components

// Main Wrapper for Navbar
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 10rem;
    align-items: center;
    padding: 0 1.5 rem;
    transition: background-color .5s ease;
    z-index: 9999;
    border-bottom: 2px solid rgba(255,255,255,.05);
    margin-left: 50px;
    margin-right: 50px;
`;

// NavBar is separated into left, center and right

// Left side of Navbar
const LeftSide = styled.div`
    display: flex;
`;

// Center of Navbar
// Flex is a way to define how much each portion is gonna take of the size given to it
const Center = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

// Right side of Navbar
const RightSide = styled.div`
    display: flex;
`;

// Declaration of navbar links
/*const navbarLinks = [
    "Home Page",
    "Illustrator Gallery",
    "Art Gallery",
    "Challenges"
];*/

// ---------------------------- Creating the NavBar function/component
function NavBar(props) {
    // Setting the return value, or the component
    return(
        <Wrapper>
            {/* For the left side, we want to import the Logo component */}
            <LeftSide>
                <Logo />
            </LeftSide>

            <Center>
                {/* For the middle, we want to add the different links */}
                <NavLinks />
            </Center>

            <RightSide></RightSide>
        </Wrapper>
    );
}

export default NavBar;