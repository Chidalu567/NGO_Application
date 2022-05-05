import styled from 'styled-components';
import Image from 'next/image';

// Pictures
import clothing from '../../public/images/workstats/clothing.jpeg';
import school from '../../public/images/workstats/school.jpg';
import food from '../../public/images/workstats/food.jpg';

//Antdesign
import { Progress,Carousel } from 'antd';


//UIComponents
const Container = styled.div`

`;

const Content = styled.div`
    width:auto;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:80%;
    height:500px;
    margin:auto;
    background-color:white;
    box-shadow:2px 2px 5px 4px rgba(0,0,0,0.25);
    position:relative;
    top:-70px;
`;

const Text = styled.p`
    font-family:Inter;
    font-size:30px;
    font-weight:900;
    margin:5px 30px;
    align-self:center;
`;

const DonateButton = styled.button`
    padding:10px;
    border-radius:20px;
    background-color:#FF5E14;
    color:white;
    font-family:"Inter";
    font-size:20px;
    font-weight:900;
    border:1px solid transparent;
    width:60%;
    margin:auto;
    position:relative;
    top:13px;
    filter:drop-shadow(0px 3px 4px rgba(0,0,0.25));
`;

export const WorkStatistic = () => {
    return (
        <Container>
            <Content>
                <Carousel autoplay>
                    <Image src={clothing} priority="true" layout="responsive" height={1600}  alt=""/>
                    <Image src={school} layout="responsive" priority="true" height={800} alt=""/>
                    <Image src={food} layout="responsive" priority="true" alt=""/>
                </Carousel>
                <Text>Estimated Break Even</Text>
                <Progress type="dashboard" percent={88} status="active" size="large" style={{alignSelf:"center",marginBottom:"10px"}}/>
                <DonateButton type="button">Donate Now</DonateButton>
            </Content>
        </Container>
    )
}