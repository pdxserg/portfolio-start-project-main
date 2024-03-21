import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./hederMenu/HederMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from "./"

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Headr: React.FC = () => {
	return (
		<S.Header>
			<Container>
				<FlexWrapper justify={"space-between"} align={"center"}>
					<Logo />
					<HeaderMenu menuItems={items} />
					<MobileMenu menuItems={items} />
				</FlexWrapper>

			</Container>


		</S.Header>
	);
};




