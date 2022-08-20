/* eslint-disable require-unicode-regexp */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Logo } from '~/components/Logo'

import {
	BrandStyle,
	BurgerStyle,
	HeaderStyle,
	MenuBlockStyle,
	MenuBlockStyle2,
	MenuInner,
	MenuItem,
	MenuLinkStyle,
	MenuStyle,
	NavbarStyle,
} from './style'

export function Header() {
	const { pathname } = useRouter()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<HeaderStyle>
			<NavbarStyle>
				<Link href="/">
					<BrandStyle>
						<Logo />
					</BrandStyle>
				</Link>
				<BurgerStyle
					onClick={() => setIsOpen(!isOpen)}
					className={isOpen ? 'is-active' : ''}
				>
					<span />
					<span />
					<span />
				</BurgerStyle>
				<MenuStyle className={isOpen ? 'is-active' : ''}>
					<MenuInner>
						<MenuItem onClick={() => setIsOpen(false)}>
							<Link href="/">
								<MenuLinkStyle className={pathname === '/' ? 'active' : ''}>
									Inicio
								</MenuLinkStyle>
							</Link>
							{pathname === '/' ? <span /> : ''}
						</MenuItem>
						<MenuItem onClick={() => setIsOpen(false)}>
							<Link href="/products">
								<MenuLinkStyle
									className={pathname.replaceAll(/[0-9]/g, '').replaceAll('/', '') === 'products' ? 'active' : ''}
								>
									Produtos
								</MenuLinkStyle>
							</Link>
							{pathname.replaceAll(/[0-9]/g, '').replaceAll('/', '') === 'products' ? <span /> : ''}
						</MenuItem>
						<MenuItem onClick={() => setIsOpen(false)}>
							<Link href="/reviews">
								<MenuLinkStyle
									className={pathname === '/reviews' ? 'active' : ''}
								>
									Reviews
								</MenuLinkStyle>
							</Link>
							{pathname === '/reviews' ? <span /> : ''}
						</MenuItem>
						<MenuItem onClick={() => setIsOpen(false)}>
							<Link href="/support">
								<MenuLinkStyle
									className={pathname === '/support' ? 'active' : ''}
								>
									Ajuda
								</MenuLinkStyle>
							</Link>
							{pathname === '/support' ? <span /> : ''}
						</MenuItem>
					</MenuInner>

					<hr />

					<Link href="/login">
						<MenuBlockStyle2>Login</MenuBlockStyle2>
					</Link>
				</MenuStyle>
				<Link href="/login">
					<MenuBlockStyle>Login</MenuBlockStyle>
				</Link>
			</NavbarStyle>
		</HeaderStyle>
	)
}
