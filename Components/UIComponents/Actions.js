import Image from 'next/image';

import styled from 'styled-components';

//images
import mustache from '../../public/images/mustache.png';
import donateImage from '../../public/images/donateImage.jpg';
import foodImage from '../../public/images/workstats/food.jpg';
import eImage from '../../public/images/volunteerImage.jpg';

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

const ListContainer = styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-left:50px;
    margin-right:50px;
    box-sizing:border-box;
`;

const ListItem = styled.div`
    margin-top:20px;
`;

const TimeLineContainer = styled.div`
    width:450px;
    margin:auto auto;
    @media (max-width:740px){
        width:350px;
    }
`;
const TimelineItem = styled.div``;

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
                <Timeline mode="alternate">

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={donateImage} priority="true" layout="responsive" />} style={{width:150}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={donateImage} priority="true" layout="responsive" />} style={{width:150}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={donateImage} priority="true" layout="responsive" />} style={{width:150}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={donateImage} priority="true" layout="responsive" />} style={{width:150}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>

                    <Timeline.Item>
                        <TimelineItem>
                            <Card hoverable cover={<Image src={donateImage} priority="true" layout="responsive" />} style={{width:200}}>
                                <Meta title="For Real" description="Joking around" />
                            </Card>
                        </TimelineItem>
                    </Timeline.Item>


                </Timeline>
            </TimeLineContainer>
        </Container>
    )
}