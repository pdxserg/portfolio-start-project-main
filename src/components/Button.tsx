import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

export const Button = styled.button`
	
   
    text-transform: uppercase;
	width: 170px;
	height: 32px;
	position: relative;
	z-index: 0;
	 &:hover{
		 &::before{
             height: 100%;
			 width: 100%;
			 z-index: -1;
		 }
	 }
        &::before {
	        position: absolute;
            content: "";
	        display: inline-block;
            height: 10px;
            width: 50%;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${theme.colors.accent};
	        
        }
	
	
    
`
