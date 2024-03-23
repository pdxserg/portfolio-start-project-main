import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../../components/FlexWrapper";
import {LinkItem} from "../../components/LinkItem";
import {Button} from "../../components/Button";



const Works = styled.section`
	min-height: 84vh;
    ${FlexWrapper}{
	    gap: 10PX;
    }
`
const Work = styled.div`
	
	
    width: 330px;
	flex-grow: 1;
    background-color: ${theme.colors.secondBg};
    
	${LinkItem} {
		padding: 10px 0;
		& + ${LinkItem} {
			margin-left: 20px;
		}
	}
	
	@media ${theme.media.desktop} {
        max-width: 540px;	
    }
`
const ImageWrap = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            height: 100%;
            width: 100%;
            z-index: -1;
        }
    }

    &::before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
	@media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    }
`
const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
	
`
const Description = styled.div`
padding: 20px 25px;
`

const WorkTitle = styled.h3`
`
const WorkText = styled.p`
	padding: 15px 0 10px ;
`
export const S = {
	Works,
	Work,
	ImageWrap,
	Image,
	Description,
	WorkTitle,
	WorkText
}