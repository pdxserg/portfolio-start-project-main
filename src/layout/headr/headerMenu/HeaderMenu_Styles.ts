import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {Link} from "react-scroll";

const Mask = styled.span`
position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow-y: hidden;
	
	color: ${theme.colors.accent};
	
	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
	
`
const MenuItem = styled.li`
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
const NavLink = styled(Link)`
    font-family: Josefin Sans, sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
	color: transparent;

`

//Mobile menu

const MobileMenu = styled.nav`

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
//Desktop
const StyledDesktopMenu = styled.nav`
     ul {
	     display: flex;
	     gap: 30px;
	     justify-content: center;
     }
	
`

export const S = {
	NavLink,
	MenuItem,
	Mask,
	BurgerButton,
	MobileMenuPopup,
	MobileMenu,
	StyledDesktopMenu
}