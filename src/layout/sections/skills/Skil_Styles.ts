import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";

const Skill = styled.div`
    width: 330px;
	flex-grow: 1;
	padding: 42px 20px 52px;
	
	@media ${theme.media.mobile} {
        padding: 62px 20px 40px;
    }
`
export const IconWrap =styled.div`
position: relative;
	z-index: 0;
	
	&::before{
		position: absolute;
		content: "";
		width: 80px;
		height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
		z-index: -1;
        left: 50%;
		top: 50%;
		transform-origin: top left;
        
       
      
       
	}
`
const SkillTitle = styled.h3`
	margin: 70px 0 15px;
    
    text-transform: uppercase;
`
const SkillText = styled.p`
text-align: center;
`

export const S = {
	Skill,
	SkillTitle,
	SkillText,
}