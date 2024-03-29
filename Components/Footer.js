import styled from 'styled-components';
import { useState, useReducer } from 'react';
import axios from 'axios';
import {message} from 'antd'

export const Footer = () => {

        //state for person email address
    const [email, setEmail] = useState({ email: '' }); // state definition

        //handleChange input value
    const handleChange = (e) => {
        const emailAddress = e.target.name;
        const value = e.target.value;
        if (value)  setEmail({[emailAddress]:value});
    }

        //handleSubmit action
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            const mailed_data = await axios({ method: "POST", url: ' https://sporg.herokuapp.com/api/newsletter', data: email });
            message.loading(mailed_data.data.loading, 2.5)
                .then(() => message.success(mailed_data.data.success))
                .then(() => message.info(mailed_data.data.info));
        }
    }

    return (
        <Container>

            <Section1>
                <Header>Subscribe to Our Newsletter</Header>
                <FormArea>
                    <SubscribeInput type="email" onChange={handleChange} name="email"/>
                    <Button type="submit" onClick={handleSubmit}>Subscibe</Button>
                </FormArea>
            </Section1>

            <Section2>

                <SideContainer></SideContainer>

                <ServiceContainer>
                    <ServiceHeader>Services</ServiceHeader>
                    <ServiceText>Education for all</ServiceText>
                    <ServiceText>School development</ServiceText>
                    <ServiceText>Donation</ServiceText>
                    <ServiceText>Care Services</ServiceText>
                </ServiceContainer>

                <ContactContainer>
                    <ContactHeader>Contacts</ContactHeader>
                    <ContactText>+61 423 278 457</ContactText>
                    <ContactText>+234 813 012 5850</ContactText>
                    <ContactText>+234 703 852 2644</ContactText>
                </ContactContainer>
            </Section2>

        </Container>
    )
}

// UI Components
const Container = styled.div`
    background-color:#1E2129;
`;

const Section1 = styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:baseline;
`;

const Section2 = styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-left:20px;
    margin-right:60px;
    box-sizing:border-box;
    @media  (max-width:700px){
        flex-direction:column;
        margin-left:20px;
    }
`;

const Header = styled.h4`
    color:white;
    font-size:3vw;
    padding:20px;
    padding-bottom:2px !important;
`;

const FormArea = styled.form`
    margin-top:20px;
    margin-right:40px;
    @media(max-width:700px){
        width:100%;
    }
`;

const Button = styled.button`
    padding:2px;
    border:1px solid transparent;
    border-radius:10px;
    font-family:'Inter';
    font-size:15px;
    font-weight:700px;
    background-color:#FF5E14;
    color:white;
    width:90px;
    margin-left:8px;
`;

const SubscribeInput = styled.input`
    background-color:#323641;
    border:1px solid transparent;
    border-radius:25px;
    padding-left:10px;
    color:white;
    @media(max-width:700px){
        width:50%;
        margin-left:40px;
    }
    @media(min-width:885px){
        width:400px;
    }
    &:hover{
        border:1px solid transparent;
    }
`;

const ServiceContainer = styled.div`
    margin-top:20px;
`;

const ServiceText = styled.p`
    color:#605B5B;
`;

const ServiceHeader = styled.h4`
    color:white;
`;
const ContactContainer = styled.div`
    margin-top:20px;
`;

const ContactText = styled.p`
    color:#605B5B;
`;

const ContactHeader = styled.h4`
    color:white;
`;

const SideContainer = styled.div`

`;