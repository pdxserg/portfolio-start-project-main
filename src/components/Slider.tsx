import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";

export const Slider = () => {
	return (
		<StyledSlider>
			<FlexWrapper>
				<Slide>
					<StyledText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Aliquid autem beatae delectus dolore dolores doloribus id iure magnam
						magni non nulla optio perferendis praesentium quia reprehenderit tenetur
						unde veritatis, voluptatum.
					</StyledText>
					<Name>@ivan ivanow</Name>
				</Slide>
			</FlexWrapper>
			<Pagination>
				<span> </span>
				<span> </span>
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
    border: 1px solid red ;
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
	margin: 20px 0 50px;

`

const Pagination = styled.div`
    span {
	    display: inline-block;
	    width: 7px;
	    height: 7px;
     
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.5);
	    & + span {
    margin-left: 5px;
    }
    }
	   
`
