import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const Container = styled.div`
    width: 100%;
    color: white;
`;

const HeaderDiv = styled.div`
    padding-left:4rem;
    color:white;
    @media only screen and (max-width: 768px){
        text-align:center;
    }
`;

const Header = styled.h1`
    font-size: 3rem;
    font-family: 'Black Han Sans';
    padding-top:2rem;
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
    align-content:space-around;
    width: 100%;
    height: 200rem;
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
    font-size: 2rem;
    font-weight: 400;
    width: 28rem;
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    font-family: 'EB Garamond';
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