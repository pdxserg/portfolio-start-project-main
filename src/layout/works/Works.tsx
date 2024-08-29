import React, {useState} from 'react';
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";
import photo from "../../assets/images/proj1.png"
import photo1 from "../../assets/images/proj2 .png"
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../components/Container";
import {Work} from "./work/Work";
import {S} from "./Work_Styles"

// const tabsItem = ["All", "Landingpage", "React", "SPA"]
type FiltereType = {}
const tabsItem: Array<{
	title: string,
	status: 'all' | 'spa' | 'react' | 'landingpage'
}> = [
	{
		title: "All",
		status: "all"
	},
	{
		title: "Landing page",
		status: "landingpage"
	},
	{
		title: "React",
		status: "react"
	},
	{
		title: "SPA",
		status: "spa"
	},
]
const worksDate = [

	{
		src: photo,
		title: 'Social Network',
		description: 'lorem10orem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliquaUt enim ',
		type: "spa"
	},
	{
		src: photo1,
		title: 'Timer',
		description: 'lorem10orem ipsum dolor sit amet,' +
			' consectetur adipisicing elit, sed do eiusmod ' +
			'tempor incididunt ut labore et dolore magna aliqua' +
			' Ut enim ',
		type: "react"
	},
	{
		src: photo1,
		title: 'Timer',
		description: 'lorem10orem ipsum dolor sit amet,' +
			' consectetur adipisicing elit, sed do eiusmod ' +
			'tempor incididunt ut labore et dolore magna aliqua' +
			' Ut enim ',
		type: "react"
	},
	{
		src: photo1,
		title: 'Landingpage',
		description: 'lorem10orem ipsum dolor sit amet,' +
			' consectetur adipisicing elit, sed do eiusmod ' +
			'tempor incididunt ut labore et dolore magna aliqua' +
			' Ut enim ',
		type: "landingpage"
	}
]
export const Works: React.FC = () => {
	const [curentFilterStatus, setCurentFilterStatus] = useState<'all' | 'spa' | 'react' | 'landingpage'>("all")

	let filteredWorks = worksDate
	if (curentFilterStatus === "landingpage") {
		filteredWorks = worksDate.filter(el => el.type === "landingpage")
	}
	if (curentFilterStatus === "react") {
		filteredWorks = worksDate.filter(el => el.type === "react")
	}
	if (curentFilterStatus === "spa") {
		filteredWorks = worksDate.filter(el => el.type === "spa")
	}
const changeFilterStatus=(value: 'all' | 'spa' | 'react' | 'landingpage')=>{
		setCurentFilterStatus(value)
}
	return (
		<S.Works>
			<Container>
				<SectionTitle>My Work </SectionTitle>
				<TabMenu tabsItems={tabsItem}
				         changeFilterStatus={changeFilterStatus}
				/>
				<FlexWrapper justify={'space-between'} align={"flex-start"} wrap={"wrap"}>

					{filteredWorks.map((w, index) => {
						return <Work
							key={index}

							src={w.src}
							title={w.title}
							description={w.description}/>
					})}
				</FlexWrapper>
			</Container>
		</S.Works>
	);
};

