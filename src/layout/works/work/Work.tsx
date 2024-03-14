import React from 'react';
import styled from "styled-components";
import {LinkItem} from "../../../components/LinkItem";
import {theme} from "../../../styles/Theme.styled";


type WorkPropsType = {
	src: string
	title: string
	description: string
}

	export const Work = (props: WorkPropsType) => {
		return (
			<StyledWork>
				<Image src= {props.src} alt=""/>
					<Description>
						<WorkTitle>{props.title}</WorkTitle>
						<WorkText>{props.description}</WorkText>
						<LinkItem href={ "#"}>Demo</LinkItem>
						<LinkItem href={ "#"}>Code</LinkItem>
					</Description>

			</StyledWork>
		);
	};

const StyledWork = styled.div`
	max-width: 540px;
    width: 100%;
    background-color: ${theme.colors.secondBg};
    
	${LinkItem} {
		padding: 10px 0;
		
	}
`
const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`
const Description = styled.div`
padding: 20px 25px;
`

const WorkTitle = styled.h3`
`
const WorkText = styled.p`
	padding: 15px 0 10px ;
`