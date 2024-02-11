import React from "react";
import styled from "styled-components";
import Red from "../images/Red.svg"
import Yellow from "../images/Yellow.svg"
import Green from "../images/Green.svg"
import SmallGreen from "../images/SmallGreen.svg"

const LeftArticleWrapper = styled.div`
    max-width: 70vw;
    margin: 15px;
    display: flex;
    z-index: 1;

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-width: 90vw;
        justify-content: center;
        margin: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;

const MainImage = styled.div`
    max-width: 100%;
    max-height: 100%;
    z-index: 2;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 1023px) {
        max-width: 100%;
        max-height: 100%;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
        max-height: 100%;

        img {
            margin: 0px 0px 0px 0px;
        }
    }
`;

const TitleImage = styled.div`
    display: flex;
    z-index: 3;
    max-width: 100%;
    margin: 0rem 0rem 0rem -10%;
    position: relative;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ArticleImage = styled.div`
    position: absolute;
    max-height: 80%;
    max-width: 70%;
    overflow: hidden;
    top: 10%;
    left: 10%;
    border-radius: 10px;
`

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: fit-content;
    margin: 0rem 0rem 0rem 0rem;
    
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-weight: 600;
    color: white;
`;

const ArticleTitle = styled(ArticleInfo)`
    position: absolute;
    font-size: 1.4rem;
    padding: 10%;
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 1023px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 550px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.6rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.5rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.4rem;
    }
`;

const ArticleAuthor = styled(ArticleInfo)`
    font-size: 16px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        font-size: 8px;
        margin-top: 0px;
    }
`;

const LeftArticle = ({ article }) => {
    return (
        <LeftArticleWrapper>     
            <Column>
                <MainImage>
                    <img alt={article.article_title} src={Red}/>
                    <ArticleImage>
                        <img src={article.image_url}/>
                    </ArticleImage>
                </MainImage>
            </Column>
            <Column>
                <TitleImage>
                    <img alt={article.article_title} src={SmallGreen}/>
                    <ArticleTitle>{article.article_title}</ArticleTitle>
                </TitleImage>
            </Column>
        </LeftArticleWrapper>
    );
}

export default LeftArticle;