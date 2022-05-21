import Image from 'next/image';

//For Styled components
import styled from 'styled-components';

//images
import mustache from '../../public/images/mustache.png';
import donateImage from '../../public/images/donateImage.jpg';
import foodImage from '../../public/images/workstats/food.jpg';

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
    font-size:20px;
    font-family:Inter;
    color:rgba(0,0,0,0.9);
    padding:10px;
`;

export const Staffs = () => {
    return (
        <Container>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={true}
                modules={[EffectCards]}
                className="allStaffs"
            >

                <SwiperSlide>
                    <Image src={donateImage} priority={true} />
                    <Title>CEO</Title>
                    <Description>Mr Philip Aguwuncha is the Chief Executive officer of Sir Philip NGO Organization.</Description>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={donateImage} priority={true} />
                    <Title>Staff Administrator</Title>
                    <Description>Concilia Philip is the Staff Administrator of Sir Philip Aguwncha NGO organization.</Description>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={donateImage} priority={true} />
                    <Title>Event Staff</Title>
                    <Description>Ebuka Okoye is the Event Staff Lead of Sir Philip NGO Organization.</Description>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}