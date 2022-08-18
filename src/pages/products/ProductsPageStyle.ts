import styled from 'styled-components'

export const ProductsPageStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 90%;
	margin-bottom: 500px;
	/* gap: 100px; */
`

export const SearchContainer = styled.form`
	width: 490px;
	margin-top: 150px;
	display: block;
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
	width: 90%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 20px;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
`

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const ItemTitle = styled.h3`
	font-size: 0.5rem;
`

export const ItemDescription = styled.p`
	font-size: 0.5rem;
	margin-top: 10px;
	margin-bottom: 10px;
`

export const ItemPrice = styled.h3`
	font-size: 1.2rem;
	color: var(--color-blue-400);
`

export const ItemImage = styled.img`
	width: 50%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`

export const ItemButton = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 100%;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	background-color: var(--color-blue-400);
	color: white;
	font-size: 1rem;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: var(--color-blue-500);
	}
`;
