import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";

export const Slogan = () => {
	return (
		<StyledSlogan>
			<SectionTitle>I Am Available For Freelance</SectionTitle>
			<Button type="submit" >Hire me</Button>
		</StyledSlogan>
	);
};

const StyledSlogan = styled.section`
	height: 50vh;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`