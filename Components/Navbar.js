import Image from 'next/image';
import logoPic from '../public/images/Logo.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';

//styled components import
import styled,{keyframes} from 'styled-components';

// Ant design
import { Drawer, Modal, Input, Tooltip,InputNumber,Radio } from 'antd';
import {UserOutlined,InfoCircleOutlined} from '@ant-design/icons'




export const Navbar = () => {

    const [drawerProps, setDrawerProps] = useState({visible:false,placement:'bottom'}); // initilize the state variable and handler

    // modal open and close state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // client info state
    const [person,setPerson] = useState({name:'',email:'',country:'',amount:'',phone:''});

    const handleClick = () => {
        // state handler call to update the state
        setDrawerProps({ ...drawerProps, visible: true });
    }

    const handleCloseDrawer = () => {
        // state handler call to update the state
        setDrawerProps({ ...drawerProps, visible: false });
    }

    const handleDonateButtonClick = () => {
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
                url: 'http://localhost:5000/api/create-checkout-session',
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
        <NavBar>
            <NavLogo>
                <Image src={logoPic} height="90px" width="100px" alt=""/>
            </NavLogo>

            <NavContainer>
                <NavItems>Home</NavItems>
                <NavItems>About</NavItems>
                <NavItems>Causes</NavItems>
                <NavItems>Staff</NavItems>
            </NavContainer>

            <Modal title="Detail section" visible={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)}>
                <Input placeholder="Enter username" name="name" style={{ marginBottom: "20px", height: "50px" }} prefix={<UserOutlined className="site-form-item-icon" />} suffix={<Tooltip title="Username"><InfoCircleOutlined /></Tooltip>} onChange={handleChange} />
                <Input placeholder="Enter email" name="email" style={{ marginBottom: "20px", height: "50px" }} suffix={<Tooltip title="Email address"><InfoCircleOutlined /></Tooltip>} onChange={handleChange} />
                <Radio.Group style={{marginBottom:"20px"}} buttonStyle="solid" onChange={handleRadioChange}>
                    <Radio.Button value="AUS">AUS</Radio.Button>
                    <Radio.Button value="NGN">NIG</Radio.Button>
                </Radio.Group><br />
                <MyInput type="number" name="amount" onChange={handleChange} placeholder="Enter amount"/>
                <MyInput type="text" name="phone" onChange={handleChange} placeholder="Enter phonenumber"/>
                <DonateButton style={{display:"block",marginLeft:"0px"}} onClick={handleDonateClick}>Donate</DonateButton>
            </Modal>


            <DonateSection>
                <FontAwesomeIcon icon={faBagShopping} style={{ color: 'white', height: "30px" }} />
                <DonateButton type="submit" onClick={()=>handleDonateButtonClick()}>Donate</DonateButton>
            </DonateSection>

            <BurgerButton onClick={()=>handleClick()}>
                <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: "40px" }} />
            </BurgerButton>

            <Drawer visible={drawerProps.visible} onClose={() => handleCloseDrawer()} placement={drawerProps.placement} key={drawerProps.placement} maskClosable={ true} drawerStyle={{backgroundColor:'#262F36',color:'white'}} headerStyle={{backgroundColor:'white',padding:"20px"}} >
                <div>Home</div>
                <div>About</div>
                <div>Staff</div>
                <DrawerDButton type="button">Donate Now</DrawerDButton>
            </Drawer>
        </NavBar>
    )
}


// All styled components section
//////////////////////////////// ------Styled Section components-----////////////////////////////////////////////////////////////////
const NavBar = styled.div`
    background-color:#262F36;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    max-height:150px;
    filter:drop-shadow(2px 2px 4px rgba(0,0,0,0.25));
    @media screen and  (max-width:700px){
        max-width:700px;
    }
    box-sizing:border-box;
`;

const NavLogo = styled.div`
    margin-left:50px;
    margin-top:5px;
`;


const NavContainer = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    box-sizing:border-box;
    @media (max-width:1400px ){
        display:none;
    }
`;
const NavItems = styled.li`
    list-style-type:none;
    color:white;
    font-family:Inter;
    font-size:25px;
    font-weight:800px;
    align-self:center;
    margin-left:90px;
    box-sizing:border-box;
    padding:30px;
    &:hover {
        background-color:rgba(128,128,128,0.25);
        filter:drop-shadow(2px,2px,2px,rgba(0,0,0,0.35));
    };
`;

const DonateSection = styled.section`
    @media (max-width:1400px){
        display:none;
    }
`;

const DonateButton = styled.button`
    padding:10px;
    border-radius:10px;
    width:150px;
    margin:20px 30px;
    border:1px solid transparent;
    color:white;
    background-color:#FF5E14;
    font-family:Inter;
    font-size:17px;
    &:hover{
        box-shadow:2px 3px 5px 4px #262F36;
    }
`;

const BurgerButton = styled.button`
    @media (min-width:1400px){
        display:none;
    };
    margin-right:40px;
    background-color:#262f36;
    border:1px solid transparent;
    filter:drop-shadow(2px 2px 4px 4px rgba(0,0,0,0.25));
    &:hover{
        box-shadow:3px 2px 4px 0.25px #FF5E14;
    }
`;

const ButtonAnimation = keyframes`
10%{
    color:#FF5E14;
    background-color:white;
}

30%{
    color:white;
    background-color:#FF5E14;
}

60%{
    color:#FF5E14;
    background-color:white;
}
90%{
    color:white;
    bcakground-color:#FF5E14;
}
`;
const DrawerDButton = styled(DonateButton)`
    margin-left:0px;
    animation-name:${ButtonAnimation};
    animation-iteration-count:infinite;
    animation-duration:8s;
    animation-timing-function:ease-in-out;
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