import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Skil_Styles"
import {IconWrap} from "../Skil_Styles";


type SkillPropsType = {
	iconId: string
	title: string
	description: string
}
export const Skill = (props: SkillPropsType) => {
	return (
		<S.Skill>
			<FlexWrapper direction={"column"} align={"center"}>
				<IconWrap>
					<Icon iconId={props.iconId}/>
				</IconWrap>
				<S.SkillTitle>{props.title}</S.SkillTitle>
				<S.SkillText>{props.description}</S.SkillText>
			</FlexWrapper>
		</S.Skill>
	);
};

