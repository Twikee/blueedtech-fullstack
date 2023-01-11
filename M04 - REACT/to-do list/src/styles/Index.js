import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        text-decoration: none;
        font-family: Nunito;
        
    }

    body{
        background-color: #2d2d2d;
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	width: 32rem;
	min-height: 45rem;
	background: rgba(0, 0, 0, 0.1);
	background-color: #d3d3d3;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
	border-radius: 8px;

	.title {
		color: #e74646;
		font-size: 2.5rem;
		font-weight: 600;
	}
`;

export const Input = styled.input`
	width: 16rem;
	padding: 0.2rem;
	margin: 0.5rem;
	border-radius: 8px;
	border: none;
	font-size: 1rem;
`;

export const Button = styled.button`
	padding: 0.2rem 1rem;
	border-radius: 8px;
	border: none;
	font-size: 1rem;
`;
