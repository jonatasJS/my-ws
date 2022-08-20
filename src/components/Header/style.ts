import styled from 'styled-components'

export const HeaderStyle = styled.header`
	position: fixed;
	font: 14px/1.5em 'Fira Code';
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: auto;
	margin: 0 auto;
	transition: all 0.35s ease;
	backdrop-filter: blur(5px);
	background-color: rgba(8, 10, 12, 0.7);
	box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.5),
		inset 0 -5px 20px 1px rgba(0, 0, 0, 0.5);
`

export const BurgerStyle = styled.div`
	position: relative;
	font: 14px/1.5em 'Fira Code';
	display: block;
	cursor: pointer;
	user-select: none;
	order: -1;
	z-index: 10;
	width: 1.75rem;
	height: 1rem;
	border: none;
	outline: none;
	background: none;
	visibility: visible;
	transform: rotate(0deg);
	transition: 0.35s ease;

	// Responsive Media Query
	@media (min-width: 958px) {
		display: none;
		visibility: hidden;
	}

	span {
		position: absolute;
		font: 14px/1.5em 'Fira Code';
		display: block;
		right: 0;
		width: 100%;
		height: 2px;
		border: none;
		outline: none;
		opacity: 1;
		transform: rotate(0deg);
		background-color: var(--color-white-100);
		transition: 0.25s ease-in-out;

		&:nth-child(1) {
			top: 0px;
		}
		&:nth-child(2) {
			top: 0.5rem;
		}
		&:nth-child(3) {
			top: 1rem;
		}
	}

	&.is-active {
		transform: rotate(calc(-360deg / 2));

		span {
			&:nth-child(1) {
				top: 0.5rem;
				transform: rotate(135deg);
			}
			&:nth-child(2) {
				opacity: 0;
				visibility: hidden;
			}
			&:nth-child(3) {
				top: 0.5rem;
				transform: rotate(-135deg);
			}
		}
	}
`

export const MenuStyle = styled.div`
	position: fixed;
	font: 14px/1.5em 'Fira Code';
	top: -600%;
	left: 0;
	width: 100%;
	height: auto;
	padding: 4rem 0 3rem;
	display: grid;
	align-items: center;
	justify-content: center;
	gap: 30px;
	overflow: hidden;
	background-color: var(--color-black-300);
	box-shadow: var(--shadow-medium);
	transition: all 0.4s ease-in-out;

	hr {
		margin: -10px 0;
		border: solid 1px rgba(255, 255, 255, 0.2);
		width: 200%;
		margin-left: calc(-100% / 2);
		height: 1px;
		font: 14px/1.5em 'Fira Code';
	}

	@media (min-width: 958px) {
		position: relative;
		font: 14px/1.5em 'Fira Code';
		top: 0;
		width: auto;
		height: auto;
		padding: 0rem;
		margin-left: auto;
		background: none;
		box-shadow: none;
		/* justify-content: center;
		align-items: center; */

		hr {
			display: none;
		}
	}

	@media (min-width: 312px) {
		hr {
			display: none;
		}
	}

	&.is-active {
		top: 0;
		width: 100%;
		height: auto;
	}
`

export const NavbarStyle = styled.nav`
	display: flex;
	font: 14px/1.5em 'Fira Code';
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	column-gap: 1rem;
	width: 100%;
	height: 4.25rem;
	margin: 0 auto;
	max-width: 75rem;
	padding: 0 1.25rem;
`

export const MenuInner = styled.ul`
	display: flex;
	font: 14px/1.5em 'Fira Code';
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 1.25rem;
	margin: 0 auto;
	column-gap: 2rem;

	@media (min-width: 958px) {
		display: flex;
		flex-direction: row;
		column-gap: 2rem;
		margin: 0 auto;
	}
`

export const MenuItem = styled.li`
	display: flex;
	font: 14px/1.5em 'Fira Code';
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		border-bottom: -10px;
		font: 14px/1.5em 'Fira Code';
		border-radius: 50%;
		width: 0.25rem;
		height: 0.25rem;
		background-color: var(--color-blue-400);
		transition: all 0.25s ease-in-out;
	}
`

export const MenuLinkStyle = styled.a`
	font-family: inherit;
	font: 14px/1.5em 'Fira Code';
	font-size: 1rem;
	font-weight: 500;
	user-select: none;
	line-height: 1.5;
	color: var(--color-white-100);
	text-transform: uppercase;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		color: var(--color-blue-500);
	}

	&.active {
		color: var(--color-blue-400);
	}

	@media (min-width: 958px) {
		text-transform: capitalize;
	}
`

export const MenuBlockStyle = styled.a`
	display: inline-block;
	font: 14px/1.5em 'Fira Code';
	font-family: inherit;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.25;
	user-select: none;
	white-space: nowrap;
	text-align: center;
	margin-left: 0;
	padding: 0.65rem 1.5rem;
	border-radius: 3rem;
	text-transform: capitalize;
	color: var(--color-white);
	background-color: var(--color-blue-600);
	box-shadow: var(--shadow-medium);
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: var(--color-blue-500);
	}

	@media (max-width: 312px) {
		display: none;
	}
`

export const MenuBlockStyle2 = styled.a`
	display: none;
	font: 14px/1.5em 'Fira Code';
	font-family: inherit;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.25;
	user-select: none;
	white-space: nowrap;
	text-align: center;
	margin-left: 0;
	margin-bottom: -10px;
	padding: 0.65rem 1.5rem;
	border-radius: 3rem;
	text-transform: capitalize;
	color: var(--color-white);
	background-color: var(--color-blue-600);
	box-shadow: var(--shadow-medium);
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: var(--color-blue-500);
	}

	@media (max-width: 312px) {
		display: inline-block;
	}
`

export const BrandStyle = styled.a`
	font-family: inherit;
	font: 14px/1.5em 'Fira Code';
	font-size: 1.625rem;
	font-weight: 600;
	line-height: 1.5;
	letter-spacing: -1px;
	color: var(--color-white-100);
	text-transform: uppercase;
	cursor: pointer;
	height: 1.7rem;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		fill: var(--color-blue-400);
		stroke: var(--color-blue-500);
	}

	&:hover svg {
		fill: var(--color-blue-300);
		stroke: var(--color-blue-400);
	}

	@media (min-width: 312px) {
		margin: 0;
		padding: 0;
	}
`
