import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";
import photo from "../../assets/images/proj1.png"
import photo1 from "../../assets/images/proj2 .png"
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../components/Container";
import {Work} from "./work/Work";
import {S} from "./Work_Styles"

const items1 = ["All", "Landingpage", "React", "SPA"]

const worksDate = [

	{
		src: photo,
		title: 'Social Network',
		description: 'lorem10orem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliquaUt enim '
	},
	{
		src: photo1,
		title: 'Timer',
		description: 'lorem10orem ipsum dolor sit amet,' +
			' consectetur adipisicing elit, sed do eiusmod ' +
			'tempor incididunt ut labore et dolore magna aliqua' +
			' Ut enim '
	}
]
export const Works: React.FC = () => {
	return (
		<S.Works>
			<Container>
				<SectionTitle>My Work </SectionTitle>
				<TabMenu menuItems={items1} />
				<FlexWrapper justify={'space-between'} align={"flex-start"} wrap={"wrap"}>

					{worksDate.map((w, index)=>{
						return <Work
							key = {index}
								src={w.src}
							 	title={w.title}
							 	description={w.description} />
					})}
				</FlexWrapper>
			</Container>
		</S.Works>
	);
};

