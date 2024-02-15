import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'



const Container = styled.div`
    width: 100%;
    color: white;
    padding:3rem 11rem 5rem 11rem;
    @media only screen and (max-width: 1400px){
        padding: 9rem 9rem 4rem 9rem;
    }
    @media only screen and (max-width: 1023px){
        padding: 7rem 7rem 3rem 7rem;
    }
    @media only screen and (max-width: 768px){
        padding: 3rem 3rem 0rem 3rem;
    }
`;

const HeaderDiv = styled.div`
    z-index: 10;
    color:white;
`;

const Header = styled.h1`
    z-index: 10;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    font-family: 'Black Han Sans';
    font-weight: 400;
    text-transform: capitalize;
    font-style: normal;
    line-height: 4rem;
    padding-right: 10rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
        padding: 0;
    }
    @media only screen and (max-width: 570px) {
        display: none;
    }
    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 1.6rem;
        display: inline-block;
        display: none;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content:stretch;
    width: auto;
    height: 155rem;
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
    width: calc(50% - 1rem);
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    font-family: 'Khula';
    text-transform: uppercase;
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