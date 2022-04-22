import styles from '../styles/Home.module.css';
import Image from 'next/image';
// pictures
import HeroPic from '../public/images/heroImage.jpg';
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
import bubblePic from "../public/images/bubbleBackground.jpg"
// font awesome imports
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ant design imports
import { Statistic} from 'antd';


const Home = () => {
  return (
    <div>
      <section className={styles.Hero}>
        <Image src={HeroPic}/>
      </section>

      <section className={styles.layingHero}>
        <div>
          <FontAwesomeIcon icon={faDollarSign} style={{ color: "white",width:"45px",height:"109.3px;"}}/>
          <h3>Make a donation that could change the lives of others and you also</h3>
        </div>
        <div>
          <Image src={handsPic} width={129} height={ 127}/>
          <h3>Make a donation that could change the lives of others and you also</h3>
        </div>
        <div>
          <Image src={togetherPic} width={166} height={155} />
          <h3>Make a donation that could change the lives of others and you also</h3>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <h3 className={styles.text1}>Sir Agwuncha Philip is a NON-Governmental organization which
          <br></br><b>provides help to the needy people</b></h3>
        </div>
        {/* Quote section */}
        <div>
          <h3>
          <q>Good works is giving to the poor and the helpless, but divine works is showing them their worth to the One who matters.</q>
           <br/>Be a reason for the smile of your next neighbour, let's change the world through our giving.
          </h3>
          <button type="button">Read more</button>
        </div>
        {/* Stats section */}
        <div>
          <Image src={statsPic} height={250}/>
        </div>

        <div>
          <h4 style={{textAlign: 'center'}}>Giving Percentage</h4>

          <div className={styles.statBlock}>
            <Statistic title="Raised" value={25000} style={{color:'orange'}}/>
            <Statistic title="Expected" value={50000} />
          </div>
          <progress value={50} max={100}>
            </progress><br/>
          <button type="button">Donate More</button>
        </div>
      </section>

      <section className={styles.third}>
        <div>
          <Image src={vegePic} />
          <h4>Raise Food for People</h4>
          <progress value={50} max={100}></progress>
          <button type="button">Donate Now</button>
        </div>
        <div>
          <Image src={schoolPic} />
          <h4>Education for People</h4>
          <progress value={50} max={100}></progress>
          <button type="button">Donate Now</button>
        </div>
        <div>
          <Image src={clothePic} />
          <h4>Clothe People</h4>
          <progress value={50} max={100}></progress>
          <button type="button">Donate Now</button>
        </div>
      </section>

      <div className={styles.chart}>
        <Image src={chartPic}/>
      </div>

      <section className={styles.staff}>
        <Image src={philipPic} width={300} height={200}/>
        <div><h4>Okechukwu Philip <br/><b style={{color:'white',textShadow:'2px 2px 4px rgba(0,0,0,0.25)'}}>President</b></h4></div>
        <Image src={mumPic} width={300} height={200} />
        <div><h4>Concilia Uzochi <br></br><b style={{color:'white',textShadow:'2px 2px 4px rgba(0,0,0,0.25)'}}>Vice president</b></h4></div>
        <section>
          <Image src={ebukaPic} width={300} height={200} />
          <div><h4>Ebuka Okeye <br></br><b style={{color:'white',textShadow:'2px 2px 4px rgba(0,0,0,0.25)'}}>Event Planner</b></h4></div>
        </section>
      </section>

      <section className={styles.weDo}>
        <h3>What we do</h3>
        <h4 className={styles.text2}>Always try to create a <b style={{color:"#FF5E14"}}>"greater spirit"</b> for the needy</h4>
        <div className={styles.item5}>
            <Image src={bubblePic} height={492} width={646} />
        </div>
        <div className={styles.container}>
          <article className={styles.item1}>
            <h4>Make Donation</h4>
            <p>Assit through your donation as this would go a long way in the lives of the needy.</p>
          </article>
          <article className="item2">
            <h4>Food and Supply</h4>
            <p>Assit through food and supplies targeted to feed them. Gadgets, Medicals, Materials are needed by the needy.</p>
          </article>
          <article className="item3">
            <h4>Be Present</h4>
            <p>Be there for those who actively needs you. “Whereever there is a humanbeing there is an opportunity”- Lucius seneca</p>
          </article>
          <article className="item4">
            <h4>Enlight and Empower</h4>
            <p>Enlighten the young ones how to be independent in life. “Kindness is universal. Sometimes being kind allows others to see the goodness in humanity through you. Always be kinder than necessary” -Germany kent</p>
          </article>
        </div>
      </section>
    </div>
  )
 }

export default Home;