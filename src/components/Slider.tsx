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
	
`
const Slide = styled.div`
	
	text-align: center;
`
const StyledText = styled.p`

`
const Name =styled.span``

const Pagination = styled.div`
    span {
	    display: inline-block;
	    width: 10px;
	    height: 10px;
        margin: 5px;
        background-color: #26fc2a;
	   
`
