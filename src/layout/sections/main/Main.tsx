import React from 'react';
import photo from '../../../assets/images/photo1.jpeg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
					<div>
						<SmallText>Hi There</SmallText>
						<Name>I am <span>Olga Starchenko</span></Name>
						<MainTitle>A Web Developer. </MainTitle>
					</div>
					<PhotoWrap>
						<picture>
							<source srcSet={`${photo} 1x`}/>
							<Photo src={photo} alt="Photo"/>
						</picture>

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
    ${font({weight: 400, Fmin: 20, Fmax: 14,})}
`
const Name = styled.h2`
	 ${font({family: "'Josefin Sans' , sans-serif", weight: 700, Fmin: 36, Fmax: 50,})}
    letter-spacing: 0.05em;
	margin: 10px 0;
	
	span{
		position: relative;
		z-index: 0;
		white-space: nowrap;
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
    @media ${theme.media.mobile} {
        margin: 15px 0 22px; 
    }
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    
`
const PhotoWrap = styled.div`
position: relative;
	z-index: 0;
    
	margin-right: 15px;
	
	&::before {
		position: absolute;
		content: "";
		width: 360px;
		height: 485px;
		border: 5px solid ${theme.colors.accent};
		top: -25px;
		right: -25px;
		z-index: -1;
        @media ${theme.media.mobile} {
            height: 415px;
            width: 310px;
           
        }
	}
    @media ${theme.media.mobile} {
        margin-top: 25px ;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
	@media ${theme.media.mobile} {
		height: 380px;
		width: 310px;
        
		
	}
`