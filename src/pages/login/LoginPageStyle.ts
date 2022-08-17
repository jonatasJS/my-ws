import styled from 'styled-components'

export const LoginStyle = styled.div`
	width: 360px;
	padding: 8% 0 0;
	margin: auto;
	font-family: 'Ubuntu', cursive;
`

export const LoginForm = styled.div`
	position: relative;
	z-index: 1;
	background: #ffffff;
	border-radius: 10px;
	max-width: 360px;
	padding: 45px;
	text-align: center;
`

export const LoginTitle = styled.h1`
	font-size: 75px;
	color: var(--color-blue-600);

	svg#logo {
		width: 75px;
		height: 75px;

		path {
			fill: var(--color-blue-600);
		}
	}
`

export const LoginInput = styled.input`
	outline: 0;
	background: #f2f2f2;
	width: 100%;
	border: 0;
	border-radius: 5px;
	margin: 0 0 15px;
	padding: 15px;
	box-sizing: border-box;
	font-size: 14px;
	font-family: 'Ubuntu', cursive;

	&:focus {
		background: #dbdbdb;
	}
`

export const LoginButton = styled.button`
	font-family: 'Ubuntu', cursive;
	text-transform: uppercase;
	outline: 0;
	background: #4b6cb7;
	width: 100%;
	border: 0;
	border-radius: 5px;
	padding: 15px;
	color: #ffffff;
	font-size: 14px;
	-webkit-transition: all 0.3 ease;
	transition: all 0.3 ease;
	cursor: pointer;

	&:active {
		background: #395591;
	}
`

export const OtherLogin = styled.div`
	font-family: 'Ubuntu', cursive;
	color: #000;
	font-size: 14px;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 35px;
	margin-bottom: 0px;
	gap: 10px;

	a {
		color: #000;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
		margin: 0 !important;
		cursor: pointer;

		&:hover {
			color: var(--color-blue-600);
			text-decoration: underline;
		}
	}
`
