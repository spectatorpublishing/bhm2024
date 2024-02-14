import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'
import BottomLeft from '../images/BottomLeft.png'
import BottomRight from '../images/BottomRight.png'


const Container = styled.div`
    width: 100%;
    padding:3rem 11rem 0rem 11rem; 
    @media only screen and (max-width: 768px){
        padding: 3rem 3rem 0rem 3rem;
    }
    color: white;
`;

const HeaderDiv = styled.div`
    z-index: 10;
    color:white;
    text-align: left;
`;

const Header = styled.h1`
    z-index: 10;
    font-size: 3rem;
    font-family: 'Black Han Sans';
    @media only screen and (max-width: 1216px){
        width: 68%;
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 768px){
        width: 80%;
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 600px){
        font-weight: 400;
        font-size: 1.3rem;
        padding-top:5rem;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content:stretch;
    width: 100%;
    height: 150rem;
    margin-top: 2rem;
    @media only screen and (max-width: 768px){
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        height: fit-content;
        margin-top:2rem;
    }  
`;

const Section = styled.div`
    z-index: 5;
    font-size: 2rem;
    font-weight: 400;
    width: 28rem;
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    font-family: 'Khula';
    @media only screen and (max-width: 1216px){
        font-size: 1.8rem;
        width: 18rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.7rem;
        width: 16rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.6rem;
        text-align: center;
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.4rem;
        text-align: center;
        width: 100%;
    }
`;

const Name = styled.div`
    z-index: 5;
    font-family: 'Khula', sans-serif;
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1216px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 0.8rem;
    }
    @media only screen and (max-width: 768px){
        font-size:1rem;
    }
`;

const BottomLeftPhoto = styled.img`
    position: absolute;
    margin-bottom: 0;
    left: 0;
    z-index: 1;
    width: 20%;
`
const BottomRightPhoto = styled.img`
    position: absolute;
    margin-bottom: 0;
    right: 0;
    z-index: 1;
`

const Credits = () => {
    return (
        <Container id="credits">
            <HeaderDiv><Header>Staff who made this issue possible: </Header></HeaderDiv>
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => {
                    return(
                        <Section> {section} 
                        <br/>
                        {key.map((person, index) => {
                            return(
                                <Name key={index}>{person.staff_name}, {person.title}</Name>
                            );
                        })}
                        <br/>
                        </Section>
                    );
                })}
            </SectAndNames>
        </Container>
    )
};

export default Credits;