import Image from "next/image";
import styled from "styled-components";


// Pictures
import HeroPic from "../../public/images/heroImages/heroImage.jpg";
import HeroCryingPic from "../../public/images/heroImages/childCrying.jpg";
import HeroHelpingPic from "../../public/images/heroImages/helpingPoor.jpg";
import HeroTeam1 from '../../public/images/HeroFloatImage/team.jpg';
import HeroTeam2 from '../../public/images/HeroFloatImage/team2.jpg';
import HeroEvent1 from '../../public/images/HeroFloatImage/event1.jpg';
import HeroEvent2 from '../../public/images/HeroFloatImage/event2.jpg';
import HeroHelped from '../../public/images/HeroFloatImage/helped.jpg';


// ant design Components
import { Carousel } from "antd";

//fontawesome icons and components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign,faArrowRight} from '@fortawesome/free-solid-svg-icons';

const HeroContainer = styled.div`
  height: 500px;
`;

const FloatingContainer = styled.div`
  background-color:#FF5E14;
  max-width:100%;
  max-height:350px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:15px;
  @media (max-width:700px){
    max-width:60%;
    position:relative;
    top:-350px;
    left:100px;
  }
`;

const Text = styled.p`
  color:white;
  font-family:'Inter';
  font-size:25px;
  font-weight:900px;
  text-shadow:3px 2px 3px rgba(0,0,0,0.25);
  word-wrap:break-word;
  text-align:center;
`;

const Arrow = styled.div`
  position:relative;
  align-self:end;
  right:100px;
  top:40px;
  z-index:1;
  @media (max-width:700px){
    top: 100px;
    left:5px;
  }
`;

export const HeroComponent = () => {
  return (
    <div>
      <Carousel autoplay>

        <HeroContainer>
          <Image src={HeroPic} layout="responsive" priority="true" />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroCryingPic}
            layout="responsive"
            priority="true"
            height={740}
          />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroHelpingPic}
            layout="responsive"
            priority="true"
            height={195}
          />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroTeam1}
            layout="responsive"
            priority="true"
            height={450}
          />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroTeam2}
            layout="responsive"
            priority="true"
            height={400}
          />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroEvent1}
            layout="responsive"
            priority="true"
            height={450}
          />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroEvent2}
            layout="responsive"
            priority="true"
            height={400}
          />
        </HeroContainer>

        <HeroContainer>
          <Image
            src={HeroHelped}
            layout="responsive"
            priority="true"
            height={400}
          />
        </HeroContainer>

      </Carousel>

      <FloatingContainer>
        <FontAwesomeIcon icon={faDollarSign} style={{ color: 'white', fontSize: '40px'}} />
        <Arrow>
          <FontAwesomeIcon icon={faArrowRight} style={{ color: 'blue', fontSize: "23px", filter: 'drop-shadow(3px 2px 3px rgba(0,0,0,0.5))', fontWeight: "900px" }} />
        </Arrow>
        <Text>Make a donation that could change the lives of others and you</Text>
      </FloatingContainer>


    </div>
  );
};
