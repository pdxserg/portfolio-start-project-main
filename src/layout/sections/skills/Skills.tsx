import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
	return (
		<StyledSection>
			<Container>
				<SectionTitle>My Skills </SectionTitle>
				<FlexWrapper wrap={'wrap'} justify={'space-around'}>
					<Skill
						iconId={'codeSvg'}
						title={'html'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
					/>
					<Skill
						iconId={'css'}
						title={'css'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
					/>
					<Skill
						iconId={'react'}
						title={'react'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
					/>
					<Skill
						iconId={'tipescript'}
						title={'tipescript'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
					/>
					<Skill
						iconId={'styledCompan'}
						title={'styledCompan'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
					/>
					<Skill
						iconId={'figma'}
						title={'figma'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
					/>

				</FlexWrapper>

			</Container>

		</StyledSection>


	)
		;
};

const StyledSection = styled.section`
	
	
`



