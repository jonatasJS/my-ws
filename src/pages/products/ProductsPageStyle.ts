import styled from 'styled-components'

export const ProductsPageStyle = styled.div`
	width: 100%;
	height: calc(100%-158.8px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const SearchContainer = styled.form`
	width: 490px;
	display: block;
	margin: 0 auto;
`

export const SearchInput = styled.input`
	margin: 0 auto;
	width: 100%;
	height: 45px;
	padding: 0 50px 0 20px;
	font-size: 1rem;
	border: 1px solid #d0cfce;
	border-radius: 10px;
	outline: none;

	&:focus {
		border: 1px solid #000000;
		transition: 0.35s ease;
		color: #000000;

		&::-webkit-input-placeholder {
			transition: opacity 0.45s ease;
			opacity: 0;
		}

		&::-moz-placeholder {
			transition: opacity 0.45s ease;
			opacity: 0;
		}

		&:-ms-placeholder {
			transition: opacity 0.45s ease;
			opacity: 0;
		}
	}
`

export const SearchButton = styled.a`
	position: relative;
	float: right;
	width: 75px;
	height: 75px;
	top: -53px;
	right: -30px;
	cursor: pointer;

	color: black;
`

export const ListContainer = styled.div`
	width: 100%;
`
