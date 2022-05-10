import styled from 'styled-components';

// Styled Components
const Container = styled.div``;

const Text1 = styled.h3`
    font-family:Inter;
    color:#FF5E14;
    font-weight:900;
    font-size:30px;
    line-height:30px;
    text-align:center;
`;

const Text2 = styled.h3`
    font-family:Inter;
    font-weight:500;
    text-align:center;
`;

const GridContainer = styled.div`
  box-shadow:0px 3px 0px #b2a98f,0px 14px 10px rgba(0,0,0,0.15),0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1);
  border:1px solid transparent;
@media (max-width:700px){
    display:grid;
    width:75%;
    background-color:white;
    margin:auto auto;
    grid-template-columns: auto auto;
    padding:10px;
}
`;

const GridItem = styled.div`
    padding:2px;
`;

const ItemTopic = styled.p`
    font-family:Inter;
    font-weight:bold;
`;
const ItemText = styled.p`
    font-family:Inter;
    font-weight:400;
    margin-right:3px;
    word-wrap:break-word;
`;

const Quote = styled.span`
    color:#FF5E14;
    font-weight:700;
`;

export const OurAction = () => {
    return (
        <Container>

            <Text1>What We Do</Text1>
            <Text2>Always try to create a <Quote>greater spirit</Quote> for the needy</Text2>

            <GridContainer>

                <GridItem>
                    <ItemTopic>Make a Donation</ItemTopic>
                    <ItemText>Assit through your donation as this would go a long way in the lives of the needy.</ItemText>
                </GridItem>

                <GridItem>
                    <ItemTopic>Food and Supply</ItemTopic>
                    <ItemText>Assit through food and supplies targeted to feed them. Gadgets, Medicals, Materials are needed by the needy.</ItemText>
                </GridItem>

                <GridItem>
                    <ItemTopic>Our Presence</ItemTopic>
                    <ItemText>Be there for those who actively needs you. “Whereever there is a humanbeing there is an opportunity”- Lucius seneca</ItemText>
                </GridItem>

                <GridItem>
                    <ItemTopic>Empowerment</ItemTopic>
                    <ItemText>Enlighten the young ones how to be independent in life. “Kindness is universal. Sometimes being kind allows others to see the goodness in humanity through you. Always be kinder than necessary” -Germany kent</ItemText>
                </GridItem>
            </GridContainer>
        </Container>
    )
}