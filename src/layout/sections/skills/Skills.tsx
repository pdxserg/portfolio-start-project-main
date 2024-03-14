import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
	return (
		<StyledSection>
			<Container>
				<SectionTitle>My Skills </SectionTitle>
				<FlexWrapper wrap={'wrap'} justify={'space-between'}>
					<Skill
						iconId={'codeSvg'}
						title={'html'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}
					/>
					<Skill
						iconId={'css'}
						title={'css'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}
					/>
					<Skill
						iconId={'react'}
						title={'react'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}
					/>
					<Skill
						iconId={'tipescript'}
						title={'tipescript'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}
					/>
					<Skill
						iconId={'styledCompan'}
						title={'styledCompan'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}
					/>
					<Skill
						iconId={'figma'}
						title={'figma'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}
					/>

				</FlexWrapper>

			</Container>

		</StyledSection>


	)
		;
};

const StyledSection = styled.section`
	
	
`



