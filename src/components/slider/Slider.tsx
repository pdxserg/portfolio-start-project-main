import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Slider_Styles"

export const Slider: React.FC = () => {
	return (
		<S.Slider>
			<FlexWrapper>
				<S.Slide>
					<S.StyledText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</S.StyledText>
					<S.Name>@ivan ivanow</S.Name>
				</S.Slide>
			</FlexWrapper>
			<S.Pagination>
				<span> </span>
				<span className={"active"}> </span>
				<span> </span>
			</S.Pagination>
			
		</S.Slider>
	);
};


