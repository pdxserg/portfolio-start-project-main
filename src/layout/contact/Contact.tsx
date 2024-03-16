import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme.styled";


export const Contact = () => {
	return (
		<StyledContact>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<StyledForm>
					<Field type="text" placeholder="Name"/>
					<Field type="email" placeholder="Email"/>
					<Field as={ 'textarea'} placeholder="Message"/>

					<Button type="submit" >Send message</Button>
				</StyledForm>
			</Container>
		</StyledContact>
	);
};

const StyledContact = styled.section`
	
`
const StyledForm = styled.form`
max-width: 540px;
	width: 100%;
    display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 0 auto;
	align-items: center;
	
	textarea {
		resize: none;
		height: 155px;
	}
`
const Field = styled.input`
	cursor: pointer;
	color: ${theme.colors.font};
	padding: 7px 15px;
    width: 100%;
    border: 1px solid rgb(74, 74, 74);
    background-color: ${theme.colors.secondBg};
    font-family: Poppins, sans-serif;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.05em;
	
`