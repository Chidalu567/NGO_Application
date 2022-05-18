import Image from "next/image";

//styled components import
import styled, { keyframes} from "styled-components";

// Pictures
import HeroPic from "../../public/images/heroImages/heroImage.jpg";


export const HeroComponent = () => {
  return (
    <HeroContainer>
      <Text>Help the <Orange>Needy</Orange> through your <Orange>Donations</Orange></Text>
      <Text2><Black>Donate</Black> <White>Smartly</White> </Text2>
      <Image src={HeroPic} priority="true" layout="responsive" />
    </HeroContainer>
  );
};


// Ui Component Styles
const HeroContainer = styled.div`
  position:relative;
`;

// Moving text animations
const movingText = keyframes`
20%{
  color:#ff7e00;
}
60%{
  color:red;
}
100%{
  color:#FF5E14;
}
`;

const Text = styled.p`
position:absolute;
font-size:5.5vw;
font-family:Oswald;
color:white;
z-index:1;
top:20px;
filter:drop-shadow(0px 2px 3px #9a9a99);
width:50vw;
margin-left:20px;
`;

const Orange = styled.b`
  color:#edac8e;
  animation-name:${movingText};
  animation-duration:9s;
  animation-iteration-count:infinite;
  animation-timing-function:ease;
`;

const Text2 = styled(Text)`
  font-size:4vw;
  font-weight:1000;
  position:absolute;
  left:38vw;
  top:100px;
  z-index:-1.9;
  text-align:center;
`;

const invertTwo = keyframes`
10%{
  color:black;
}
30%{
  color:white;
}
60%{
  color:black;
}
90%{
  color:white;
}

`;
const invertOne = keyframes`
10%{
  color:white;
}
30%{
  color:black;
}
60%{
  color:white;
}
90%{
  color:black;
}
`;

const White = styled.b`
  animation-name:${invertOne};
  animation-duration:8s;
  animation-iteration-count:infinite;
  color:black;
`;
const Black = styled.b`
  animation-name:${invertTwo};
  animation-duration:8s;
  animation-iteration-count:infinite;
  color:white;
`;