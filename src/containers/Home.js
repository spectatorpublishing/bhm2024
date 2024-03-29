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
import Left from '../images/Left.png'; 
import Right from '../images/Right.png';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #4F3850;
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
    color: #F4D1D8;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 1;
    font-size: 12.5vw;
    text-align: right;
`;

const Title2 = styled.div`
    display: flex;
    align-items: center;
    color: #F4D1D8;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: .7;
    font-size: 5.1vw;
    width:fit-content;
    text-align: right;
    margin-bottom: 0.5vw;
`;

const Title3 = styled.div`
    display: flex;
    align-items: center;
    color: #F4D1D8;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 1.1;
    margin-top: 0.5vw;
    font-size: 5.1vw;
    width:auto;
    text-align: right;
`;

const TitleContainer = styled.div`
    z-index: 5;
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
    z-index: 3;
    display: flex;
    justify-content: flex-end;
    width: 17%;
    position: absolute;
    margin-top: -175rem;
    right: 0;
    @media only screen and (max-width: 1200px){
        margin-top: -195rem;
    }
    @media only screen and (max-width: 1023px){
        margin-top: -155rem;
    }
    @media only screen and (max-width: 768px){
        margin-top: -280rem;
    }
    @media only screen and (max-width: 610px){
        margin-top: -270rem;
    }
    @media only screen and (max-width: 540px){
        margin-top: -260rem;
    }
`
const TopLeftPhoto = styled.img`
    z-index: 0;
    display: flex;
    width: 18%;
    position: absolute;
    margin-top: 30%;
    left: 0;
`
const TopRightPhoto = styled.img`
    z-index: 0;
    display: flex;
    width: 22%;
    position: absolute;
    margin-top: 11%;
    right: 21.5%;
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

const HomeSectionContainer = styled.div`
    z-index: 2;
    background-color: rgba(33,33,33,0.5);
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    @media only screen and (max-width: 1400px){
        margin-left: 3.5rem;
        margin-right: 3.5rem;
    }
    @media only screen and (max-width: 1023px){
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
    @media only screen and (max-width: 768px){
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`

const Home = () => {

    return (
        <HomeContainer>
                <SpecLogoHeader/>
                <MobileNavBar/>
                <Wrapper>
                    <TopLeftPhoto src={Left} alt=""/>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7OD7D4SIKJFY5BVS5CUFSJBBU4.jpg" alt = "black history month graphic" width = "83%"></img></Photo>
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
                <MiddlePhoto src={RedYellow} alt=""/>
                <HomeSectionContainer>
                    <Letter/>
                    <Credits/>
                </HomeSectionContainer>
                <BottomLeftPhoto src={BottomLeft} alt=""/>
                <BottomRightPhoto src={BottomRight} alt=""/>
        </HomeContainer>
    );
};

export default Home;