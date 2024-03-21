import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme.styled";


export const Footer = () => {
	return (
		<StyledFooter>

				<FlexWrapper direction={"column"} align={"center"}>
					<Name>Olga</Name>
					<SocialList>
						<SocialItem>
							<SocialIconLink>
								<Icon iconId="insta" width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
							</SocialIconLink>
						</SocialItem>
						<SocialItem>
							<SocialIconLink>
								<Icon iconId="telegram" width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>

							</SocialIconLink>
						</SocialItem>
						<SocialItem>
							<SocialIconLink>
								<Icon iconId="vk" width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
							</SocialIconLink>
						</SocialItem>
						<SocialItem>
							<SocialIconLink>
								<Icon iconId={"linkedin"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
							</SocialIconLink>
						</SocialItem>
					</SocialList>
					<Copyright>© 2023 Olga , All Rights Reserved.</Copyright>
				</FlexWrapper>


		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primeryBg};
	padding: 40px 0 ;

`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
	@media ${theme.media.mobile} {
        font-size: 16px;
    }
`
const SocialList = styled.ul`
    display: flex;
	gap: 20px;
	margin: 30px 0;
`

const SocialItem = styled.li`
   
`
const SocialIconLink = styled.a`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    width: 35px;
    height: 35px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${theme.colors.accent};
	
	&:hover {
		cursor: pointer;
		color: ${theme.colors.primeryBg};
		transform: translateY(-4px);
       background-color: ${theme.colors.accent};
	}
	


`

const Copyright = styled.small`
    color: rgba(255, 255, 255, 0.5);
`