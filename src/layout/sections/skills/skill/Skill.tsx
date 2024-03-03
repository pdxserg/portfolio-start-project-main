import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
	iconId: string
	title: string
	description: string
}
export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<Icon iconId={props.iconId}/>
			<SkillTitle>{props.title}</SkillTitle>
			<SkillText>{props.description}</SkillText>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(224, 216, 216, 0.5);
	margin: 10px;
	
`

const SkillText = styled.p`
    color: rgb(255, 255, 255);
   
   
`

const SkillTitle = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
`