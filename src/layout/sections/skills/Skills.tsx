import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
	return (
		<StyledSection>
			<SectionTitle>My Skills </SectionTitle>
			<FlexWrapper>
				<Skill iconId={'codeSvg'} name={'html'}/>
				<Skill iconId={'css'} name={'css'}/>
				<Skill iconId={'react'} name={'react'}/>
				<Skill iconId={'tipescript'} name={'tipescript'} />

			</FlexWrapper>

		</StyledSection>


	)
		;
};

const StyledSection = styled.section`
    background-color: #d2cdac;
    min-height: 100vh;
`



