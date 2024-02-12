import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';
import SpecLogoHeader from '../components/SpecLogoHeader';

const Container = styled.div`
    min-height: 100vh;
    background: black; 
`;

const HeaderDiv = styled.div`
    color: white;
    font-family: 'Black Han Sans';
    font-size: 4rem;
    font-weight: 400;
    padding: 2rem 4rem;
    display: flex;
    text-transform: capitalize;

    @media screen and (max-width: 1023px) {
        width: fit-content;
        margin: 0rem auto;
        font-size: 2.5rem;
        padding: 1rem 1rem;
        text-align: center;
    }
`;

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 25px;
        @media screen and (min-width: 1024px) {
            padding-left: 20px;
        }
        @media screen and (max-width: 1023px) {
            margin: 0px;
            display: flex;
            align-items: center;
        }
`;

const Section = ({ header, articles }) => {
    return (
        <Container>
            <SpecLogoHeader/>
            <NavBar isSection />
            <MobileNavBar />
            <HeaderDiv>
                {header}
            </HeaderDiv>
            <ArticlesContainer>
                {articles.map((article, index) => (
                    (index % 2 === 0) ? <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article} color={index % 3} /></a> : <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article} color={index % 3}/></a>
                ))}
            </ArticlesContainer>
        </Container>
    );
};


export default Section;


