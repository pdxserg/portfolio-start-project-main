import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
	iconId: string
	name: string
}
export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<Icon iconId={props.iconId}/>
			<SkillTitle>{props.name}</SkillTitle>
			<SkillText>
				Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Quisquam, vero!
			</SkillText>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
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