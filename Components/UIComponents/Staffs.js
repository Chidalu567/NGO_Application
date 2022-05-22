import Image from 'next/image';

//For Styled components
import styled from 'styled-components';

//images
import mustache from '../../public/images/mustache.png';
import okechukwuImage from '../../public/images/staffs/okechukwu.png';
import conciliaImage from '../../public/images/staffs/Concilia.png';
import ebukaImage from '../../public/images/staffs/Ebuka.png';

// swiper
import { Swiper,SwiperSlide} from 'swiper/react';
import { EffectCards } from 'swiper'; // swiper modules
//swiper Styles
import 'swiper/css';
import 'swiper/css/effect-cards';


//UI components
const Container = styled.div`

`;
const Title = styled.h4`
    text-align:center;
    color:black;
    font-family:'Inter';
    font-weight:800;
`;
const Description = styled.p`
    text-align:center;
    font-size:15px;
    font-family:Inter;
    color:rgba(0,0,0,0.9);
    padding:10px;
`;


const Legend = styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    justify-content:center;
    margin-top:40px;
    margin-bottom:40px;
`;

const Text = styled.p`
    position:absolute;
    z-index:1;
    top:16px;
    font-family:Inter;
    font-weight:900;
    color:black;
    font-size:23px;
`;

export const Staffs = () => {
    return (
        <Container>
            <Legend>
                <Text>Staffs</Text>
                <Image src={mustache} width={"170vw"} height={"120vw"}/>
            </Legend>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={true}
                modules={[EffectCards]}
                className="allStaffs"
            >

                <SwiperSlide>
                    <Image src={okechukwuImage} priority={true} />
                    <Title>CEO</Title>
                    <Description>Mr Philip Aguwuncha is the chief executive officer of sir philip ngo organization.</Description>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={conciliaImage} priority={true} />
                    <Title>Staff Administrator</Title>
                    <Description>Concilia Okechukwu is the staff administrator of sir philip aguwncha ngo organization.</Description>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={ebukaImage} priority={true} />
                    <Title>Event Staff</Title>
                    <Description>Ebuka Okoye is the event staff lead of sir philip ngo organization.</Description>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}