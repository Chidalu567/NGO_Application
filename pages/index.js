import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

// pictures
import handsPic from '../public/images/volunteer 1.png';
import togetherPic from '../public/images/image 1.png';
import statsPic from "../public/images/childSmiling.jpg";
import vegePic from "../public/images/food.jpg";
import schoolPic from "../public/images/school.jpg";
import clothePic from "../public/images/clothing.jpeg";
import chartPic from "../public/images/chart.png";
import philipPic from "../public/images/okechukwu.png";
import mumPic from "../public/images/Concilia.png";
import ebukaPic from "../public/images/Ebuka.png";
import bubblePic from "../public/images/bubbleBackground.jpg";

// font awesome imports
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ant design imports
import { Statistic} from 'antd';

// import UI components
import { HeroComponent } from '../Components/UIComponents/HeroComponent';


const Home = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Sir Philip NON governmental Organization" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <HeroComponent/>
    </div>
  )
 }

export default Home;