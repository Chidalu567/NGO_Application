import styled from 'styled-components';
import Image from 'next/image';
//////////////////////////////// Pictures
import FirstSectionImage from '../../public/images/childSmiling.jpg'
/////////////////////////////// Ant design Components
import { Progress } from 'antd';
import { Modal, Input, Tooltip,Radio } from 'antd';
import {UserOutlined,InfoCircleOutlined} from '@ant-design/icons'
import { useState } from 'react';


export const FirstSection = () => {
        // modal open and close state
    const [isModalOpen, setIsModalOpen] = useState(false);

        // client info state
    const [person,setPerson] = useState({name:'',email:'',country:'',amount:'',phone:''});

    const handleDonateButtonClick = () => {
        console.log("Button working")
        // set it to the opppsite
        setIsModalOpen(true);
    }


    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        // update the state dynamically
        setPerson({ ...person, [key]: value });
    }

    const handleRadioChange = (e) => {
        setPerson({ ...person, country: e.target.value });
    }

    const handleDonateClick = async() => {
        if (person.amount&&person.name&&person.country&&person.phone) {
            const response = await axios({
                url: ' https://sporg.herokuapp.com/api/create-checkout-session',
                method: "post",
                data: {
                    name: person.name,
                    email: person.email,
                    phone: person.phone,
                    country: person.country,
                    amount: person.amount,
                }
            });
            if (response.data) {
                const link = response.data.link;
                window.location.href = link;
            }
        }
    }

    return (
        <Section1>
            <Text1>Sir Aguwuncha Philip is a non-governmental organization which <br/><OrangeText>provides help to the needy.</OrangeText></Text1>

            <FirstArticle>
                <Text2><ColorQuote>&ldquo;`</ColorQuote>Good works is giving to the poor and the helpless, but divine works
                    showing them their worth to the One who matters.<ColorQuote>&ldquo;`</ColorQuote> <br />
                    <OrangeText>Be a reason for the smile of your next neighbour, lets change the world through our giving.</OrangeText>
                </Text2>
                <ReadMore type="button">Read more</ReadMore>
            </FirstArticle>

            <Modal title="Detail section" visible={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)}>
                <Input placeholder="Enter username" name="name" style={{ marginBottom: "20px", height: "50px" }} prefix={<UserOutlined className="site-form-item-icon" />} suffix={<Tooltip title="Username"><InfoCircleOutlined /></Tooltip>} onChange={handleChange} />
                <Input placeholder="Enter email" name="email" style={{ marginBottom: "20px", height: "50px" }} suffix={<Tooltip title="Email address"><InfoCircleOutlined /></Tooltip>} onChange={handleChange} />
                <Radio.Group style={{marginBottom:"20px"}} buttonStyle="solid" onChange={handleRadioChange}>
                    <Radio.Button value="AUS">AUD</Radio.Button>
                    <Radio.Button value="NGN">NGN</Radio.Button>
                </Radio.Group><br />
                <MyInput type="number" name="amount" onChange={handleChange} placeholder="Enter amount"/>
                <MyInput type="text" name="phone" onChange={handleChange} placeholder="Enter phonenumber"/>
                <DonateButton style={{display:"block",marginLeft:"0px"}} onClick={handleDonateClick}>Donate</DonateButton>
            </Modal>

            <SecondArticle>
                <Image src={FirstSectionImage} layout="responsive" priority="true" alt=""/>
                <Statistic>
                    <Stats>Raised : $25000 / $30000</Stats>
                    <Progress type="circle" strokeColor={{ '0%': '#FF5E14', '100%': 'gray' }} percent={50} style={{marginLeft:"30%"}}/>
                    <DonateButton type="button" onClick={()=>handleDonateButtonClick()}>Donate Now</DonateButton>                </Statistic>
            </SecondArticle>

        </Section1>
    )
}


// UI Components Styles
const Section1 = styled.section`
    background-color:#C4C4C4;
    display:grid;
    grid-template-columns:50vw;
    grid-template-rows:auto auto;
    row-gap:20px;
`;

const Text1 = styled.p`
    grid-column:1/3;
    font-family:'Inter';
    font-weight:900;
    line-height:30px;
    text-align:center;
    margin-top:20px;
    font-size:30px;
    margin-top:30px;
    filter:drop-shadow(2px 2px 4px rgba(0,0,0,0.25));
    @media (max-width:700px){
        font-size:25px;
    }
`;
const Text2 = styled.p`
    color:white;
    font-weight:900;
    font-family:'Inter';
    text-align:center;
    line-height:30px;
    font-size:25px;
    padding:26px;
`;

const OrangeText = styled.b`
    color:#FF5E14;
`;

const FirstArticle = styled.article`
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media (max-width:700px){
        grid-column:1/3;
        margin-left:44px;
        margin-right:44px;
    }
`;

const SecondArticle = styled.article`
    position:relative;
    @media (max-width:700px){
        grid-column:1/3;
    }
`;

const ReadMore = styled.button`
    background-color:#FF5E14;
    color:white;
    font-family:'Inter';
    font-weight:900;
    padding:10px;
    font-size:20px;
    border-radius:20px;
    width:80%;
    margin-left:10%;
    margin-right:10%;
    margin-bottom:30px;
    border:1px solid transparent;
    box-shadow:0px 14px 10px rgba(0,0,0,0.15),0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1);
`;

const Stats = styled.p`
    font-family:'Inter';
    font-weight:900;
    padding:20px;
`;

const DonateButton = styled.button`
    position:relative;
    bottom:-50px;
    display:block;
    background-color:#FF5E14;
    color:white;
    font-family:'Inter';
    font-size:20px;
    font-weight:800;
    padding:10px;
    border-radius:20px;
    width:60%;
    margin-left:20%;
    margin-right:20%;
    border:1px solid transparent;
    margin-bottom:30px;
    margin-top:20px;
    box-shadow:0px 14px 10px rgba(0,0,0,0.15),0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1);
`;

const ColorQuote = styled.b`
    color: #FF5E14;
    display:inline;
`;

const Statistic = styled.div`
    background-color:white;
    position:relative;
    top:-80px;
    margin-left:10%;
    margin-right:10%;
    height:300px;
    box-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1);
`;

const MyInput = styled.input`
    display:block;
    width:100%;
    height:50px;
    border:1px solid lightgray;
    margin-bottom:20px;
    padding:5px;
    &:hover{
        border:1px solid lightblue;
    }
`;
