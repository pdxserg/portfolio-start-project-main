import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/Slider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {IconWrap} from "../sections/skills/skill/Skill";

export const Testimony = () => {
	return (
		<StyledTestimony>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction={"column"} align={"center"}>
				<IconWrap>
					<Icon iconId={'quote'}/>
				</IconWrap>
				<Slider/>
			</FlexWrapper>
		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`

    min-height: 50vh;
	
	${IconWrap}{
		margin: 40px 0 60px;
	}
`

