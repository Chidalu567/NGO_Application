import styled from 'styled-components';
import Image from 'next/image';

//ant design components
import { Carousel } from 'antd';

// images
import Staff1 from '../../public/images/staffs/concilia.png';
import Staff2 from '../../public/images/staffs/ebuka.png';
import Staff3 from '../../public/images/staffs/okechukwu.png';

 const Container = styled.div`
    margin-top:60px;
`;

const StaffContainer = styled.div``;

export const Staffs = () => {
    return (
        <Container>
            <Carousel autoplay>
                <StaffContainer>
                    <Image src={Staff1} layout="responsive" priority="true" alt=""/>
                </StaffContainer>

                <StaffContainer>
                    <Image src={Staff2} layout="responsive" priority="true" alt=""/>
                </StaffContainer>

                <StaffContainer>
                    <Image src={Staff3} layout="responsive" priority="true" alt=""/>
                </StaffContainer>
            </Carousel>
        </Container>
    )
}