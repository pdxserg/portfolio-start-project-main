import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

const SosialIconLinkDate = [
	{
		iconId: "insta"
	},
	{
		iconId: "telegram"
	},
	{
		iconId: "vk"
	},
	{
		iconId: "linkedin"
	},
]
export const Footer: React.FC = () => {
	return (
		<S.Footer>
				<FlexWrapper direction={"column"} align={"center"}>
					<S.Name>Olga</S.Name>
					<S.SocialList>
						{SosialIconLinkDate.map((s, index)=>{
							return(
									<S.SocialItem key ={index}>
										<S.SocialIconLink>
											<Icon iconId={s.iconId} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>

										</S.SocialIconLink>
									</S.SocialItem>
								)

						})}

					</S.SocialList>
					<S.Copyright>© 2023 Olga , All Rights Reserved.</S.Copyright>
				</FlexWrapper>


		</S.Footer>
	);
};

