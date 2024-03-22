import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

const Main = styled.section`
   min-height: 100vh;
	display: flex;
`

const SmallText = styled.h2`
    ${font({weight: 400, Fmin: 20, Fmax: 14,})}
`
const Name = styled.h2`
	 ${font({family: "'Josefin Sans' , sans-serif", weight: 700, Fmin: 36, Fmax: 50,})}
    letter-spacing: 0.05em;
	margin: 10px 0;
	
	span{
		position: relative;
		z-index: 0;
		white-space: nowrap;
	&::before{
		content: "";
		display: inline-block;
		width: 100%;
		height: 20px;
		background-color: ${theme.colors.accent};
		position: absolute;
		bottom: 0;
		z-index: -1;
	}	
	}
    @media ${theme.media.mobile} {
        margin: 15px 0 22px; 
    }
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    
`
const PhotoWrap = styled.div`
position: relative;
	z-index: 0;
    
	margin-right: 15px;
	
	&::before {
		position: absolute;
		content: "";
		width: 360px;
		height: 485px;
		border: 5px solid ${theme.colors.accent};
		top: -25px;
		right: -25px;
		z-index: -1;
        @media ${theme.media.mobile} {
            height: 415px;
            width: 310px;
           
        }
	}
    @media ${theme.media.mobile} {
        margin-top: 25px ;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
	@media ${theme.media.mobile} {
		height: 380px;
		width: 310px;
        
		
	}
`
export const S = {
	Main,
	Name,
	SmallText,
	MainTitle,
	PhotoWrap,
	Photo,
}