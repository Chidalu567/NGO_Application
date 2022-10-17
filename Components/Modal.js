import React from 'react';
import { Modal, Input, Tooltip,Radio} from 'antd';
import { useState } from 'react';
import {UserOutlined,InfoCircleOutlined} from '@ant-design/icons'
import styled from 'styled-components';

// custom stateless component for modal
export const ModalComponent = ({modalVisibility}) => {
    console.log(modalVisibility);

    // state to hold modal modalVisibility
    const [isModalOpen,setIsModalOpen] = useState(modalVisibility);

    // state to hold user information
    const [person, setPerson] = useState({ email: '', name: '', country: '', amount: '', phone: '' });

    // function to handle change in input
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        // update the key dynamically and value
        setPerson({ ...person, [key]: value });
    }

    // function to handle chanage in radio button
    const handleRadioChange = (e) => {
        setPerson({...person, country: e.target.value });
    }


    // function to pass data to the server
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
        <Modal title="Donation section" visible={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)}>
            <Input placeholder="Enter username" name="name" style={{ marginBottom: "20px", height: "50px" }} prefix={<UserOutlined className="site-form-item-icon" />} suffix={<Tooltip title="Username"><InfoCircleOutlined /></Tooltip>} onChange={handleChange} />
            <Input placeholder="Enter email" name="email" style={{ marginBottom: "20px", height: "50px" }} suffix={<Tooltip title="Email address"><InfoCircleOutlined/></Tooltip>} onChange={handleChange}/>
            <Radio.Group style={{ marginBottom: "20px" }} buttonStyle="solid" onChange={handleRadioChange}>
                <Radio.Button value="AUS">AUD</Radio.Button>
                <Radio.Button value="NGN">NGN</Radio.Button>
            </Radio.Group>
            <MyInput type="number" name="amount" placeholder="Enter amount" onChange={handleChange} />
            <MyInput type="text" name="phone" placeholder="Enter phonenumber" onChange={handleChange} />
            <DonateButton style={{display:"block",marginLeft:"0px"}} onClick={handleDonateClick}>Donate</DonateButton>
        </Modal>
    )
}

// ui design
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
