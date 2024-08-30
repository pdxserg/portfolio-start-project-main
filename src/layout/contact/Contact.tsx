import React from 'react';
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {S} from "./Contact_Styles"


export const Contact: React.FC = () => {
	return (
		<S.Contact id={"contact"}>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<S.StyledForm>

					<S.Field type="text" placeholder="Name"/>
					<S.Field type="email" placeholder="Email"/>
					<S.Field as={ 'textarea'} placeholder="Message"/>

					<Button type="submit" >Send message</Button>
				</S.StyledForm>
			</Container>
		</S.Contact>
	);
};

