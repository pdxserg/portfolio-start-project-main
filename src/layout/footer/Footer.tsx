import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper direction={"column"} align={"center"}>
				<SectionTitle>Olga</SectionTitle>
				<SocialList>
					<SocialItem>
						<SocialIconLink>
							<Icon iconId="insta"/>
						</SocialIconLink>
					</SocialItem>
					<SocialItem>
						<SocialIconLink>
							<Icon iconId="telegram"/>
						</SocialIconLink>
					</SocialItem>
					<SocialItem>
						<SocialIconLink>
							<Icon iconId="vk"/>
						</SocialIconLink>
					</SocialItem>
					<SocialItem>
						<SocialIconLink>
							<Icon iconId="linkedin"/>
						</SocialIconLink>
					</SocialItem>
				</SocialList>
				<Copyright>© 2023 Olga , All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
    background-color: #cbc3c3;
    min-height: 20vh;

`
const SocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    list-style-type: none;
`
const SocialIconLink = styled.a`


`

const Copyright = styled.small`
`