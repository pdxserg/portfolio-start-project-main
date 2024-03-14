import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Work} from "./work/Work";
import photo from "../../assets/images/proj1.png"
import photo1 from "../../assets/images/proj2 .png"
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../components/Container";

const items1 = ["All", "Landingpage", "React", "SPA"]
export const Works = () => {
	return (
		<StyledWorks>
			<Container>
				<SectionTitle>My Work </SectionTitle>
				<TabMenu menuItems={items1} />
				<FlexWrapper justify={'space-between'}>
					<Work
						src={photo}
						title={'Social Network'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}/>

					<Work
						src={photo1}
						title={'Timer'}
						description={'lorem10orem ipsum dolor sit amet,' +
							' consectetur adipisicing elit, sed do eiusmod ' +
							'tempor incididunt ut labore et dolore magna aliqua' +
							' Ut enim '}/>
				</FlexWrapper>
			</Container>
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
    
`