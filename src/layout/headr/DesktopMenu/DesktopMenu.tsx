import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {Menu} from "./Menu";

export const DesktopMenu: React.FC <{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
	return (
		<StyledDesktopMenu>
			<Menu menuItems={props.menuItems}/>

			{/*<ul>*/}
			{/*	{props.menuItems.map((item, index)=> {*/}
			{/*			return	<ListItem key={index}>*/}
			{/*				<Link href="#">{item}*/}
			{/*				<Mask>*/}
			{/*					<span>{item}</span>*/}
			{/* 				</Mask>*/}
			{/*				<Mask>*/}
			{/*					<span>{item}</span>*/}
			{/*				</Mask>*/}
			{/*				</Link>*/}
			{/*			</ListItem>*/}
			{/*		}*/}
			{/*	)}*/}
			{/*</ul>*/}
		</StyledDesktopMenu>
	);
};
const StyledDesktopMenu = styled.nav`
     ul {
	     display: flex;
	     gap: 30px;
	     justify-content: center;
     }
	@media ${theme.media.tablet} {
		display: none;
	}
	
`

// const Link = styled.a`
//     font-family: Josefin Sans, sans-serif;
//     font-size: 30px;
//     font-weight: 400;
//     text-align: center;
// 	color: transparent;
// `
// const Mask = styled.span`
// position: absolute;
// 	top: 0;
// 	left: 0;
// 	display: inline-block;
// 	height: 50%;
// 	overflow-y: hidden;
// 	//outline: 1px solid red;
// 	color: ${theme.colors.accent};
//
// 	& + & {
// 		top: 50%;
// 		span {
// 			display: inline-block;
// 			transform: translateY(-50%);
// 		}
// 	}
//
// `
// const ListItem = styled.li`
// 	position: relative;
//
// 	&::before{
// 		content: "";
// 		display: inline-block;
// 		height: 3px;
// 		background-color: ${theme.colors.accent};
//
// 		position: absolute;
// 		top: 50%;
// 		left: -10px;
// 		right: -10px;
// 		z-index: 1;
//
// 		transform: scale(0);
// 	}
// &:hover {
// 	&::before{
//         transform: scale(1);
// 	}
// 	${Mask} {
// 		color: ${theme.colors.font};
// 		 transform: skewX(12deg) translateX(2px);
//       & + ${Mask} {
//             transform: skewX(12deg) translateX(-2px);
//         }
// 	}
//
// }
// `