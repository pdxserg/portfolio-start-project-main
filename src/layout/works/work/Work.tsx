import React from 'react';
import styled from "styled-components";
import {LinkItem} from "../../../components/LinkItem";
import {theme} from "../../../styles/Theme.styled";
import {Button} from "../../../components/Button";


type WorkPropsType = {
	src: string
	title: string
	description: string
}

	export const Work = (props: WorkPropsType) => {
		return (
			<StyledWork>
				<ImageWrap>
					<Image src= {props.src} alt=""/>
					<Button>view project</Button>
				</ImageWrap>

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
		& + ${LinkItem} {
			margin-left: 20px;
		}
	}
`
const ImageWrap = styled.div`
	position: relative;
	
	&:hover{
        &::before{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0, 0.3);
            backdrop-filter: blur(4px);
        }

        ${Button} {
            opacity: 1;
            
        }
	}
	
${Button} {
	opacity: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
    &::before{
        height: 100%;
        width: 100%;
        z-index: -1;
    }
	
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