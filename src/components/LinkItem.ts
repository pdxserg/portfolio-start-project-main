import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

export const LinkItem = styled.a`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;


    &:hover {
        &::before {
            height: 10px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        left: 0;
        right: 0;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 5px;
    }

`