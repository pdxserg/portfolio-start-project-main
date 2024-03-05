import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";


export const Contact = () => {
	return (
		<StyledContact>
			<SectionTitle>Contact</SectionTitle>
			<StyledForm>
				<Field type="text" placeholder="Name"/>
				<Field type="email" placeholder="Email"/>
				<Field as={ 'textarea'}/>

				<Button type="submit" >Send message</Button>
			</StyledForm>



		</StyledContact>
	);
};

const StyledContact = styled.section`
    background-color: #c8f8b4;
	min-height: 50vh;
`
const StyledForm = styled.form`
max-width: 540px;
	width: 100%;
    display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 0 auto;
`
const Field = styled.input`
	max-width: 540px;
	height: 32px;
`