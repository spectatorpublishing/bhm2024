import React from "react";
import styled from "styled-components";

const LeftArticleWrapper = styled.div`
    max-width: 70vw;
    margin: 15px;
    display: flex;
    background-color: #7A5470;
    z-index: 1;

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-width: 90vw;
        justify-content: center;
        margin: 10px;
    }
`;

const Column = styled.div`
    flex: 1;
    height: fit-content;
    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;

const MainImage = styled.div`
    width: 350px;
    height: 350px;
    z-index: 2;
    margin: 150px 0px 75px 90px;
    background: #907388;

    img {
        width: 100%;
        height: 100%;
        margin: -75px 0px 0px -75px;
        object-fit: cover;
    }

    @media screen and (max-width: 1023px) {
        width: 250px;
        height: 250px;
    }

    @media screen and (max-width: 768px) {
        width: 30vw;
        height: 30vw;
        margin: 100px 0px 30px 90px;

        img {
            margin: -50px 0px 0px -50px;
        }
    }
`;

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: fit-content;
    margin: 2rem 1rem 0rem -1rem;
    
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-weight: 600;
    color: white;
`;

const ArticleTitle = styled(ArticleInfo)`
    font-size: 1.8rem;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
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
                    <img alt={article.article_title} src={article.image_url}/>
                </MainImage>
            </Column>
            <Column>
                <ArticleInfo>
                    <ArticleTitle>{article.article_title}</ArticleTitle>
                    <ArticleAuthor>By {article.article_authors}</ArticleAuthor>
                </ArticleInfo>
            </Column>
        </LeftArticleWrapper>
    );
}

export default LeftArticle;