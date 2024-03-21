import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme.styled";

export const Slider = () => {
	return (
		<StyledSlider>
			<FlexWrapper>
				<Slide>
					<StyledText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</StyledText>
					<Name>@ivan ivanow</Name>
				</Slide>
			</FlexWrapper>
			<Pagination>
				<span> </span>
				<span className={"active"}> </span>
				<span> </span>
			</Pagination>
			
		</StyledSlider>
	);
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
	flex-direction: column;
	align-items: center;
   
`
const Slide = styled.div`
	
	text-align: center;
`
const StyledText = styled.p`

`
const Name =styled.span`
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
	display: inline-block;
	margin: 20px 0 30px;

`

const Pagination = styled.div`
	span:nth-child(2){
        width: 20px;
            height: 7px;
            border-radius: 20px;
                background: ${theme.colors.accent};
	}
    span {
        display: inline-block;
        width: 7px;
        height: 7px;

        border-radius: 20px;
        background: rgba(255, 255, 255, 0.5);

        & + span {
            margin-left: 5px;
        }

        // &.active {
        //     width: 20px;
        //     height: 7px;
        //     border-radius: 20px;
        //     background: ${theme.colors.accent};
        // }
    }

`
