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
    color: white;
    margin-left: 5rem;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 10rem;
    font-size: 6rem;
    width:70%;
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


const Home = () => {

    return (
        <HomeContainer>
                <SpecLogoHeader/>
                <MobileNavBar/>
                <Wrapper>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JYF4NTKRJJC4LD4DO52Z4XQD5E.jpg" alt = "black history month graphic" width = "100%"></img></Photo>
                    <Title>Black History Month</Title>
                </Wrapper>
                <NavBar/>
                <Letter/>
                <Credits/>
        </HomeContainer>
    );
};

export default Home;