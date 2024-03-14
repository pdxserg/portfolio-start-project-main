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
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
	    
	  
    }

    li + li {
    }
`
const ListItem = styled.li`
	
	`


