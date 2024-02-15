import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import SpecLogoHeader from '../components/SpecLogoHeader';
import RedYellow from '../images/RedYellow.png'
import BottomLeft from '../images/BottomLeft.png'
import BottomRight from '../images/BottomRight.png'
import Left from '../images/Left.png'; // Adjust the path as necessary
import Right from '../images/Right.png';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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
    z-index: 3;
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

const MiddlePhoto = styled.img`
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    width: 17%;
    position: absolute;
    margin-top: -55rem;
    right: 0;
    @media only screen and (max-width: 768px){
        margin-top: 10%;
    } 
`
const TopLeftPhoto = styled.img`
    z-index: 0;
    display: flex;
    width: 17%;
    position: absolute;
    margin-top: 40%;
    left: 0;
    @media only screen and (max-width: 768px){
        margin-top:40%;
    } 
`
const TopRightPhoto = styled.img`
    z-index: 0;
    display: flex;
    width: 17%;
    position: absolute;
    margin-top: 25%;
    right: 10.3%;
    @media only screen and (max-width: 768px){
        margin-top: 25%;
    } 
`

const BottomLeftPhoto = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 17%;
`
const BottomRightPhoto = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: 17%;
`

const Home = () => {

    return (
        <HomeContainer>
                <SpecLogoHeader/>
                <MobileNavBar/>
                <Wrapper>
                    <TopLeftPhoto src={Left} alt=""/>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JYF4NTKRJJC4LD4DO52Z4XQD5E.jpg" alt = "black history month graphic" width = "100%"></img></Photo>
                    <TopRightPhoto src={Right} alt=""/>
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
                <MiddlePhoto src={RedYellow} alt=""/>
                <Credits/>
                <BottomLeftPhoto src={BottomLeft} alt=""/>
                <BottomRightPhoto src={BottomRight} alt=""/>
        </HomeContainer>
    );
};

export default Home;