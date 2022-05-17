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
    max-width:70%;
    position:relative;
    top:-400px;
    margin-left:15%;
    margin-right:15%;
    box-shadow:0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1);
  }
`;


// Arrow for floating Container
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

// Images
import HeroCryingPic from "../../public/images/heroImages/childCrying.jpg";
import HeroHelpingPic from "../../public/images/heroImages/helpingPoor.jpg";
import HeroTeam1 from '../../public/images/HeroFloatImage/team.jpg';
import HeroTeam2 from '../../public/images/HeroFloatImage/team2.jpg';
import HeroEvent1 from '../../public/images/HeroFloatImage/event1.jpg';
import HeroEvent2 from '../../public/images/HeroFloatImage/event2.jpg';
import HeroHelped from '../../public/images/HeroFloatImage/helped.jpg';


// ant design Components
import { Carousel } from "antd";
