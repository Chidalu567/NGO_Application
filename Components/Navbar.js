import Image from 'next/image';
import logoPic from '../public/images/Logo.png';
import { useState } from 'react';
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
//styled components import
import styled from 'styled-components';



// All styled components section
//////////////////////////////// ------Styled Section components-----////////////////////////////////////////////////////////////////
const NavBar = styled.div`
    background-color:#262F36;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    max-height:150px;
    filter:drop-shadow(2px 2px 4px rgba(0,0,0,0.25));
    @media screen and  (max-width:700px){
        max-width:700px;
    }
`;

const NavLogo = styled.div`
    margin:2px;
    margin-left:80px;
`;


const NavContainer = styled.ul.attrs(props => {
    display:'block';
})`
    align-self:center;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media (max-width:700px){
        display:none;
    }
`;
const NavItems = styled.li`
    list-style-type:none;
    color:white;
    font-family:Inter;
    font-size:25px;
    font-weight:800px;
    align-self:center;
    margin-left:90px;
    padding:30px;
    &:hover {
        background-color:rgba(128,128,128,0.25);
        filter:drop-shadow(2px,2px,2px,rgba(0,0,0,0.35));
    };
`;

const DonateSection = styled.section`
    @media (max-width:700px){
        display:none;
    }
`;

const DonateButton = styled.button`
    padding:10px;
    border-radius:10px;
    width:150px;
    margin:20px 30px;
    border:1px solid transparent;
    color:white;
    background-color:#FF5E14;
    font-family:Inter;
    font-size:17px;
    &:hover{
        box-shadow:2px 3px 5px 4px #262F36;
    }
`;

const BurgerButton = styled.button`
    @media (min-width:700px){
        display:none;
    };
    margin-right:40px;
    background-color:#262f36;
    border:1px solid transparent;
    filter:drop-shadow(2px 2px 4px 4px rgba(0,0,0,0.25));
    &:hover{
        box-shadow:3px 2px 4px 0.25px #FF5E14;
    }
`;

export const Navbar = () => {

    return (
        <NavBar>
            <NavLogo>
                <Image src={logoPic} height="90px" width="100px"/>
            </NavLogo>

            <NavContainer>
                <NavItems>Home</NavItems>
                <NavItems>About</NavItems>
                <NavItems>Causes</NavItems>
                <NavItems>Staff</NavItems>
            </NavContainer>

            <DonateSection>
                <FontAwesomeIcon icon={faBagShopping} style={{ color: 'white',height:"30px"}}/>
                <DonateButton type="button">Donate</DonateButton>
            </DonateSection>
            <BurgerButton>
                <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "40px" }} />
            </BurgerButton>
        </NavBar>
    )
}