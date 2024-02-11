import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import SpecLogoHeader from '../components/SpecLogoHeader';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 9.375vw;
`;

const Photo = styled.div`
    display: flex;
    width: 72%;
    height: auto;
    margin-left: 7.3%;
    position: relative;
`;

const Title = styled.div`
    display: flex; 
    color: #DF1717;
    margin-left: 10rem;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 12rem;
    font-size: 10rem;
    width:auto;
    text-align: right;
    @media only screen and (max-width: 1024px){
        line-height: 8rem;
        font-size: 7rem;
    }
    @media only screen and (max-width: 767px){
        line-height: 4.5rem;
        font-size: 4rem;
    }
`;

const Title2 = styled.div`
    display: inline-flex; 
    color: #006123;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 7rem;
    font-size: 3.5rem;
    width:auto;
    text-align: right;
    margin-left: 1rem;
    @media only screen and (max-width: 1024px){
        line-height: 5rem;
        font-size: 4rem;
    }
    @media only screen and (max-width: 767px){
        line-height: 2.5rem;
        font-size: 2rem;
    }
`;

const Title3 = styled.div`
    display: flex; 
    color: #F9B71A;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 1rem;
    font-size: 3.5rem;
    width:auto;
    text-align: right;
    @media only screen and (max-width: 1024px){
        line-height: 5rem;
        font-size: 4rem;
    }
    @media only screen and (max-width: 767px){
        line-height: 2.5rem;
        font-size: 2rem;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10rem;

    @media only screen and (max-width: 1024px){
        margin-right: 5rem;
    }
    @media only screen and (max-width: 767px){
        margin-right: 2rem;
    }
`;

const TitleContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;

    @media only screen and (max-width: 1024px){
        margin-right: 5rem;
    }
    @media only screen and (max-width: 767px){
        margin-right: 2rem;
    }
`;


const Home = () => {

    return (
        <HomeContainer>
                <SpecLogoHeader/>
                <MobileNavBar/>
                <Wrapper>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JYF4NTKRJJC4LD4DO52Z4XQD5E.jpg" alt = "black history month graphic" width = "100%"></img></Photo>
                    <TitleContainer>
                        <Title>BLACK</Title> 
                        <TitleContainer2>
                            <Title2>HISTORY</Title2>
                            <Title3>MONTH</Title3>
                        </TitleContainer2>
                    </TitleContainer>
                </Wrapper>
                <NavBar/>
                <Letter/>
                <Credits/>
        </HomeContainer>
    );
};

export default Home;