import Image from 'next/image';
import Head from 'next/head';


// import UI components
import { HeroComponent } from '../Components/UIComponents/HeroComponent';
import { FirstSection } from '../Components/UIComponents/FirstSection';
import { WorkStatistic } from '../Components/UIComponents/WorkStatistic';
import { Charts } from '../Components/UIComponents/Charts';
import { Staffs } from '../Components/UIComponents/Staffs';
import { OurAction } from '../Components/UIComponents/Actions';

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Sir Philip NON governmental Organization" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <HeroComponent />

      <FirstSection />

      <WorkStatistic />

      <Charts />

      <Staffs />

      <OurAction/>

    </div>
  )
 }

export default Home;