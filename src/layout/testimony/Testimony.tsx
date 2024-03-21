import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/Slider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {IconWrap} from "../sections/skills/skill/Skill";
import {Container} from "../../components/Container";

export const Testimony = () => {
	return (
		<StyledTestimony>
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

    min-height: 50vh;
	
	${IconWrap}{
		margin: 40px 0 60px;
	}
`

