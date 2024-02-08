import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';

const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
        display: none;
    }
    top:0;
    position:${props => props.isSection ? 'sticky' : ''};;
`;

const VertNav = styled.div`
    right: 4vw;
    top:${props => props.isSection ? '2.5rem' : '190px'};
    z-index:100;
    padding:1rem 0rem;
    position: ${props => props.isSection ? 'absolute' : 'absolute'};
    margin-right: 0.1rem;
    padding-right: 1.2rem;
`;

const Tab = styled.a`
    display:block;
    text-align:right;
    padding:  1.25rem 1rem 0.75rem 0.25rem;
    color: ${props => props.currentSection ? '#DF1717' : '#F9B71A'};
    font-weight: ${props => props.currentSection ? 700 : 400};
    div {
        width: 10rem;
        font-size:1rem;
    }
    :hover {
        color: #DF1717;
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
    margin-right:1.5rem;
    text-transform: uppercase;
`;

const Bullet = styled.span`
    position:absolute;
    width: 0.35rem;
    height: 0.35rem;
    background-color: #EAD1D1;
    border-radius: 50%;
    margin-top: 0.38rem;
`;


const NavBar = ({isSection}) => {
    return(
        <NavWrapper isSection={isSection}>
            <VertNav isSection={isSection}>
            {sections.map((section, index) => (
                <NavHashLink smooth to={section.url}>
                    <Tab currentSection = {window.location.pathname == section.url} key={index}>
                        <Bullet></Bullet><NavText>{section.title}</NavText>  
                    </Tab>
                </NavHashLink>
            ))}
            </VertNav>
        </NavWrapper>
    );
};

export default NavBar;