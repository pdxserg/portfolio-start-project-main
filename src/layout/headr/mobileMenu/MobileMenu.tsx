import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {Menu} from "../menu/Menu";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={false}>
				<span></span>
			</BurgerButton>
			<MobileMenuPopup isOpen={false}>
				<Menu menuItems={props.menuItems}/>
			</MobileMenuPopup>

		</StyledMobileMenu>
	);
};
const StyledMobileMenu = styled.nav`
    display: none;

	@media ${theme.media.tablet} {
        display: block;
		
    }

`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
	position: fixed;
	background-color: rgba(31, 31, 32, 0.9);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 99999;
	display: none;
	
	${props => props.isOpen && css<{isOpen: boolean}>`
	     display: flex;
		justify-content: center;
		align-items: center;
	`}
	
    ul {
        display: flex;
        gap: 30px;
	    flex-direction: column;
	    align-items: center;
        justify-content: center;
    }
	
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
	width: 200px;
	height: 200px;
	z-index: 999999;
	
	span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		left: 40px;
		bottom: 50px;
		
		${props => props.isOpen  && css<{isOpen: boolean}>`
            background-color: rgba(255, 250, 250, 0);
        `}
		
		&::before{
			content:"";
			transform: translateY(-10px);
             display: block;
             width: 36px;
             height: 2px;
             background-color: ${theme.colors.font};
            position: absolute;
            ${props => props.isOpen  && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
        `}
		}
		&::after{
            content:"";
            transform: translateY(10px);
             display: block;
             width: 36px;
             height: 2px;
             background-color: ${theme.colors.font};
            position: absolute;
            ${props => props.isOpen  && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
        `}
		}
	}
`


