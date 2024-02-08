import React from "react"
import styled from "styled-components"

const RightArticleWrapper = styled.div`
    max-width: 70vw;
    margin: 15px;
    display: flex;
    background-color: #5F415B;
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
    background: #70586D;

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
        margin: 80px 0px 30px 40px;

        img {
            margin: -20px 0px 0px -20px;
        }
    }
`;

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 95%;
    margin: 2rem 1rem 0rem 1rem;
    
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

const RightArticle = ({ article }) => {
    return (
        <RightArticleWrapper>
            <Column>
                <ArticleInfo>
                    <ArticleTitle>{article.article_title}</ArticleTitle>
                    <ArticleAuthor>By {article.article_authors}</ArticleAuthor>
                </ArticleInfo>
            </Column>
            <Column>
                <MainImage>
                    <img alt={article.article_title}  src={article.image_url}/>
                </MainImage>
            </Column>
        </RightArticleWrapper>
    )
}

export default RightArticle;