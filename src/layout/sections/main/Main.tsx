import React from 'react';
import photo from '../../../assets/images/photo1.jpeg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme.styled";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align={"center"} justify={"space-between"}>
					<div>
						<SmallText>Hi There</SmallText>
						<Name>I am <span>Olga Starchenko</span></Name>
						<MainTitle>A Web Developer. </MainTitle>
					</div>
					<PhotoWrap>
						<Photo src={photo} alt=""/>
					</PhotoWrap>

				</FlexWrapper>
			</Container>

		</StyledMain>
	);
};


const StyledMain = styled.section`
   min-height: 100vh;
	display: flex;
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`
const Name = styled.h2`
    font-family: Josefin Sans , sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
	margin: 15px 0;
	
	span{
		position: relative;
		z-index: 0;
	&::before{
		content: "";
		display: inline-block;
		width: 100%;
		height: 20px;
		background-color: ${theme.colors.accent};
		position: absolute;
		bottom: 0;
		z-index: -1;
	}	
	}
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`
const PhotoWrap = styled.div`
position: relative;
	z-index: 0;
	&::before {
		position: absolute;
		content: "";
		width: 360px;
		height: 500px;
		border: 5px solid ${theme.colors.accent};
		top: -25px;
		right: -32px;
		z-index: -1;
	}
`

const Photo = styled.img`
    Width: 350px;
    Height: 450px;
    object-fit: cover;
`