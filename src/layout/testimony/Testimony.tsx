import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/slider/Slider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {IconWrap} from "../sections/skills/Skil_Styles";
import {Container} from "../../components/Container";

export const Testimony: React.FC = () => {
	return (
		<StyledTestimony id={"testimony"}>
			<Container>
				<SectionTitle>Testimony</SectionTitle>
				<FlexWrapper direction={"column"} align={"center"}>
					<IconWrap>
						<Icon iconId={'quote'}/>
					</IconWrap>
					<Slider/>
				</FlexWrapper>
			</Container>

		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`
    position: relative;
    min-height: 50vh;
	
	${IconWrap}{
		margin: 28px 0 72px;
	}
`

