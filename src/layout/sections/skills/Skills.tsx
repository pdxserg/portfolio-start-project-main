import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillDate = [
	{
		iconId: 'codeSvg',
		title: 'html',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
	},
	{
		iconId: 'css',
		title: 'cssreact',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
	},
	{
		iconId: 'react',
		title: 'react',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
	},
	{
		iconId: 'tipescript',
		title: 'tipescript',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
	},
	{
		iconId: 'styledCompan',
		title: 'styledCompan',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
	},
	{
		iconId: 'figma',
		title: 'figma',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
	},
]

export const Skills = () => {
	return (
		<StyledSection id={"skills"}>
			<Container>
				<SectionTitle>My Skills </SectionTitle>
				<FlexWrapper wrap={'wrap'} justify={'space-around'}>

					{skillDate.map((s, index)=> {
						return <Skill
							key={index}
							iconId={s.iconId}
							title={s.title}
							description={s.description} />
					})}
					

				</FlexWrapper>

			</Container>

		</StyledSection>


	)
		;
};

const StyledSection = styled.section`
	position: relative;
	
`



