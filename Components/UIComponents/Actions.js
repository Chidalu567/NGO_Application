import Image from 'next/image';

import styled from 'styled-components';

//images
import mustache from '../../public/images/mustache.png';
import donateImage from '../../public/images/donateImage.jpg';
import foodImage from '../../public/images/workstats/food.jpg';
import eImage from '../../public/images/volunteerImage.jpg';
import image1 from '../../public/images/one.jpeg';
import image2 from '../../public/images/two.jpeg';
import image3 from '../../public/images/three.jpeg';
import image4 from '../../public/images/four.jpeg';
import image5 from '../../public/images/five.jpeg';
import image6 from '../../public/images/seven.jpeg';
import image7 from '../../public/images/eight.jpeg';
import image8 from '../../public/images/nine.jpeg';
import image9 from '../../public/images/ten.jpeg';

//Ant designs
import { Card,Timeline } from 'antd';
const { Meta } = Card;

const Container = styled.div`

`;

const Legend = styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    justify-content:center;
    margin-top:40px;
    margin-bottom:40px;
`;

const Text = styled.p`
    position:absolute;
    z-index:1;
    top:16px;
    font-family:Inter;
    font-weight:900;
    color:black;
    font-size:23px;
`;

const ListContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-left:50px;
    margin-right:50px;
    @media(max-width:740px){
        justify-content:center;
    }
`;

const ListItem = styled.div`
    margin-top:20px;
`;

const TimeLineContainer = styled.div`
    width:150px;
    @media (max-width:740px){
        width:350px;
    }
    margin:auto auto;
`;
const TimelineItem = styled.div`
    margin-left:30px;
`;

export const TimeLine = () => {
    return (
        <Container>
            <Legend>
                <Text>Our Action</Text>
                <Image src={mustache} width={"170vw"} height={"120vw"}/>
            </Legend>

            <ListContainer>
                <ListItem>
                    <Card
                    hoverable
                    cover={<Image src={donateImage} layout="responsive" priority="true" />}
                    style={{ width: 300 }}>
                        <Meta title="Make a Donation" description="Assit through your donation as this would go a long way in the lives of the needy."/>
                    </Card>
                </ListItem>

                <ListItem>
                    <Card
                    hoverable="true"
                    cover={<Image src={foodImage} layout="responsive" priority="true" />}
                    style={{width:300}}
                    >
                        <Meta title="Food and Supply" description="Assit through food and supplies targeted to feed them. Gadgets, Medicals, Materials are needed by the needy." />
                    </Card>
                </ListItem>

                <ListItem>
                    <Card
                    hoverable="true"
                    cover={<Image src={eImage} layout="responsive" priority="true" />}
                    style={{width:300}}>
                        <Meta title="Empower and Enlighten" description="Enlighten the young
                            ones how to be independent in life. “Kindness is universal. Sometimes
                            being kind allows others to see the goodness in humanity through you.
                            Always be kinder than necessary” -Germany kent"/>
                    </Card>
                </ListItem>
            </ListContainer>

            <Legend>
                <Text>Gallery</Text>
                <Image src={mustache} width={"110vw"} height={"90vw"}/>
            </Legend>

            <TimeLineContainer>
                <Timeline mode="left">

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image6} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Team Visitation" description="Our NGO visited an orphanage home, providing the care and comfort they need." />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image1} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Helping the Elderly" description="Assiting the elderly is an important role in humanity. Sir Philip Aguwuncha Organization aims to fufil this role" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image2} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Our Misson" description="To restore hope to the less privileged around the nation by combating poverty through quality education, healthcare and skills which enable them actualize their potentials in their life's growth." />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    {/* <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image3} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item> */}

                    {/* <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image4} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item> */}

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image5} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Provisions" description="Why are we NGO if we can't assist financially. Sir Philip Aguwuncha Organization aids provision to the less privileged.
                                Equally living is important in humanity" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    {/* <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image6} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item> */}

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image7} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Second Visitation" description="NGO visitation to Orphange home. Providing the needs for occupants." />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image8} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Our Vision" description="To see our society afford every man, woman and Children the opportunities to live a fulfilled life." />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={image9} priority="true" layout="responsive" />} style={{width:250}}>
                                <Meta title="Looking Forward" description="Sir Philip Aguwuncha Organization is aimed at helping people both locally and Internationally." />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>


                </Timeline>
            </TimeLineContainer>
        </Container>
    )
}