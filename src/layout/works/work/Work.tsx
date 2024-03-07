import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/proj1.png"


type WorkPropsType = {
	src: string
	title: string
	description: string
}

	export const Work = (props: WorkPropsType) => {
		return (
			<StyledWork>
				<Image src= {props.src} alt=""/>

				<WorkTitle>{props.title}</WorkTitle>
				<WorkText>{props.description}</WorkText>
				<Link href={ "#"}>Demo</Link>
				<Link href={ "#"}>Code</Link>
			</StyledWork>
		);
	};

const Link = styled.a`
	gap: 20px;
`

const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`

const StyledWork = styled.div`
	max-width: 540px;
    width: 100%;
    background-color: rgba(224, 216, 216, 0.5);
	
`
const WorkTitle = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: left;
    
`
const WorkText = styled.p`
    color: rgb(255, 255, 255);
   
   
`