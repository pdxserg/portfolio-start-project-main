import React from 'react';
import styled from "styled-components";
import {LinkItem} from "../../../components/LinkItem";


type TabMenuPropsType={
	changeFilterStatus:(value:'all' | 'spa' | 'react' | 'landingpage')=>void
	tabsItems: Array<{
		title: string,
		status: 'all' | 'spa' | 'react' | 'landingpage'}>
}
export const TabMenu = (props: TabMenuPropsType) => {
	return (
		<StyledMenu>
			<ul>
				{props.tabsItems.map((item, index) => {
						return <ListItem key={index}>
							<LinkItem as={'button'} onClick={()=>{props.changeFilterStatus(item.status)}}>
								{item.title}
							</LinkItem>
						</ListItem>
					}
				)}
			</ul>
		</StyledMenu>
	);
};
const StyledMenu = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid red;
        margin: 0 auto 40px;
    }

`
const ListItem = styled.li`

`


