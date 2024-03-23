import React from 'react';
import {LinkItem} from "../../../components/LinkItem";
import {Button} from "../../../components/Button";
import {S} from "../Work_Styles"

type WorkPropsType = {
	src: string
	title: string
	description: string
}

	export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
		return (
			<S.Work>
				<S.ImageWrap>
					<S.Image src= {props.src} alt=""/>
					<Button>view project</Button>
				</S.ImageWrap>

					<S.Description>
						<S.WorkTitle>{props.title}</S.WorkTitle>
						<S.WorkText>{props.description}</S.WorkText>
						<LinkItem href={ "#"}>Demo</LinkItem>
						<LinkItem href={ "#"}>Code</LinkItem>
					</S.Description>

			</S.Work>
		);
	};

