import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu>
			<BurgerButton>
				<span></span>
			</BurgerButton>
			<MobileMenuWrap>
				<ul>
					{props.menuItems.map((item, index) => {
							return <ListItem key={index}>
								<Link href="#">{item}
									<Mask>
										<span>{item}</span>
									</Mask>
									<Mask>
										<span>{item}</span>
									</Mask>
								</Link>
							</ListItem>
						}
					)}
				</ul>
			</MobileMenuWrap>

		</StyledMobileMenu>
	);
};
const StyledMobileMenu = styled.nav`

`
const BurgerButton = styled.button`
    position: fixed;
    top: -100px;
    right: -100px;
	width: 200px;
	height: 200px;
	
	span {
		display: block;
		width: 36px;
		height: 2px;
		color: ${theme.colors.font};
		position: absolute;
		left: 40px;
		bottom: 50px;
		
		&::before{
			content:"";
			transform: translateY(-10px);
            display: block;
            width: 36px;
            height: 2px;
            color: ${theme.colors.font};
            position: absolute;
			
		}
		&::after{
            content:"";
            transform: translateY(10px);
            display: block;
            width: 36px;
            height: 2px;
            color: ${theme.colors.font};
            position: absolute;
		}
	}
`
const MobileMenuWrap = styled.div`
	position: fixed;
	background-color: rgba(31, 31, 32, 0.9);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 99999;
    ul {
        display: flex;
        gap: 30px;
	    flex-direction: column;
	    align-items: center;
        justify-content: center;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`
const Link = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
	color: transparent;
`
const Mask = styled.span`
position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow-y: hidden;
	//outline: 1px solid red;
	color: ${theme.colors.accent};
	
	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
	
`
const ListItem = styled.li`
	position: relative;
	
	&::before{
		content: "";
		display: inline-block;
		height: 3px;
		background-color: ${theme.colors.accent};
		
		position: absolute;
		top: 50%;
		left: -10px;
		right: -10px;
		z-index: 1;
		
		transform: scale(0);
	} 
&:hover {
	&::before{
        transform: scale(1);
	}
	${Mask} {
		color: ${theme.colors.font};
		 transform: skewX(12deg) translateX(2px);
      & + ${Mask} {
            transform: skewX(12deg) translateX(-2px);
        }
	}
	
}
`
