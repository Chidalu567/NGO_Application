import Image from 'next/image';
import styled from 'styled-components';

// images
import chart from '../../public/images/chart.png';

//UI Component design pattern
const Container = styled.div`
    margin-top:40px;
`;

export const Charts = () => {
    return (
        <Container>
            <Image src={chart} layout="responsive" priority="true" alt=""/>
        </Container>
    )
}