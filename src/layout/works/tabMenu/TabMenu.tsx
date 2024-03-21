import React from 'react';
import styled from "styled-components";
import {LinkItem} from "../../../components/LinkItem";

export const TabMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((item, index) => {
						return <ListItem key={index}>
							<LinkItem href="#">{item}</LinkItem>
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


