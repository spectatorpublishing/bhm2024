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
    align-content: center;
    color: #DF1717;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 1;
    font-size: 12vw;
    text-align: right;
`;

const Title2 = styled.div`
    display: flex;
    align-items: center;
    color: #006123;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: .9;
    font-size: 5vw;
    width:fit-content;
    text-align: right;
    margin-bottom: 0.5vw;
`;

const Title3 = styled.div`
    display: flex;
    align-items: center;
    color: #F9B71A;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: .9;
    margin-top: 0.5vw;
    font-size: 5vw;
    width:auto;
    text-align: right;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10rem;
    margin-top: 3vw;
    margin-right: 7vw;
`;

const TitleContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    margin-left: 3vw;
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