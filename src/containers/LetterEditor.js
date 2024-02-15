import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    padding:3rem 11rem 0rem 11rem; 
    @media only screen and (max-width: 1400px){
        padding: 9rem 9rem 0rem 9rem;
    }
    @media only screen and (max-width: 1023px){
        padding: 7rem 7rem 0rem 7rem;
    }
    @media only screen and (max-width: 768px){
        padding: 3rem 3rem 0rem 3rem;
    }

`;

const LetterEditor = () => {
    return (
        <LetterWrapper>
            <Title>Letter From The Editor: </Title>
            <MobileTitle>Letter From The Editor: </MobileTitle>
            
            <Text>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et neque ex. Vestibulum vitae lorem at dui pellentesque aliquam. Aenean mi massa, blandit eu faucibus in, dapibus in nisi. Vivamus consequat, tortor ac molestie dignissim, nunc purus consequat sem, in tincidunt enim purus eu massa. In hac habitasse platea dictumst. Duis sit amet erat vel dui semper cursus. Quisque vitae vulputate lacus. Nam risus risus, hendrerit in ullamcorper sed, viverra eu arcu. Ut euismod, risus non consectetur ultrices, ante ipsum elementum augue, sit amet commodo orci quam tempus felis. Sed et lacus id turpis venenatis vehicula. Nullam sed eros id diam suscipit tincidunt sed quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at velit in massa ultricies ultrices.</p>
                <p> Nam scelerisque vel sem et vestibulum. Praesent et suscipit nisi. Maecenas tincidunt lectus non accumsan vehicula. In rutrum risus eget libero laoreet, id sollicitudin mi accumsan. Phasellus a ligula finibus, molestie urna a, porta ligula. Cras hendrerit risus ut posuere congue. Ut tincidunt, felis ut rhoncus dignissim, dolor tellus mollis odio, nec euismod tellus tortor sit amet diam. Curabitur in eleifend ante.</p>
                <p> Nullam cursus vel tellus ut sodales. Cras quis euismod sem. In rhoncus elit fringilla, dapibus mauris et, tempor ex. Nulla metus dui, mattis sit amet dictum sit amet, mattis in lectus. In blandit molestie molestie. Quisque tempor laoreet sollicitudin. Aenean tempor vulputate arcu. Nunc commodo a mi ut elementum. Quisque quis metus nisi. Vivamus eleifend turpis ac molestie scelerisque. Suspendisse vel nisl tempor, semper elit ac, maximus quam. Proin et volutpat tellus.</p>
            </Text>
            <Signatures>
                <Signature className='left'><div className='name'>Isabella Ramírez</div><div className='title'>Editor in Chief</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Esha Karam</div><div className='title'>Managing Editor</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Katie Zhang</div><div className='title'>Publisher</div></Signature>
            </Signatures>
        </LetterWrapper>
    );    
};

const Title = styled.div`
    color: white;
    font-family: 'Black Han Sans';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (max-width: 570px) {
        display: none;
    }

    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 1.6rem;
        display: inline-block;
        display: none;
    }
`;

const MobileTitle = styled.div`
    
    color: white;
    font-family: 'Black Han Sans';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (min-width: 570px) {
        display: none;
    }
`;

const Text = styled.div`
    p{
    color: white;
    font-family: 'Khula';
    font-style: normal;
    font-weight: 25rem;
    font-size: 1.29rem;
    line-height: 2rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 0.9rem;
        display: inline-block;
    }
    }
`;

const Signatures = styled.div`
    font-family: 'Nothing You Could Do', cursive;
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1.88rem;
        text-align: left;
    }    
`;

const Spacing = styled.div`
    width: 8rem;
    height: 1.4rem;  
`;

const Signature = styled.div`
    .name {
        color: white;
        font-style: normal;
        font-weight: 25rem;
        font-size: 2.4rem;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: left;
        
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
            line-height: 3px;
            padding-top: 15px;
        }
       
    }
    .title {
        color: white;
        font-style: normal;
        font-family: Khula;
        font-weight: 25rem;
        font-size: 1.125rem;
        line-height: 1.813rem;
        margin: 0rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
            display: inline-block;
        }
    }
    margin: 0rem;
`;

export default LetterEditor;