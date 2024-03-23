import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

const Contact = styled.section`
	
`
const StyledForm = styled.form`
max-width: 540px;
	width: 100%;
    display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 0 auto;
	align-items: center;
	
	textarea {
		resize: none;
		height: 155px;
	}
`
const Field = styled.input`
	cursor: pointer;
	color: ${theme.colors.font};
	padding: 7px 15px;
    width: 100%;
    border: 1px solid rgb(74, 74, 74);
    background-color: ${theme.colors.secondBg};
    font-family: Poppins, sans-serif;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.05em;
	
`
export const S ={
	Contact,
	StyledForm,
	Field

}