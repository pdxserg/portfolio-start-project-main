import React from 'react';
import photo from '../../../assets/images/photo1.jpeg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align={"center"} justify={"space-around"}>
					<div>
						<span>Hi There</span>
						<Name>I am Olga Starchenko</Name>
						<MainTitle>A Web Developer. </MainTitle>
					</div>
					<Photo src={photo} alt=""/>
				</FlexWrapper>
			</Container>

		</StyledMain>
	);
};

const MainTitle = styled.h1`
`

const Name = styled.h2`
`

const StyledMain = styled.section`
   min-height: 100vh;
`
const Photo = styled.img`
    Width: 350px;
    Height: 450px;
    object-fit: cover;
`