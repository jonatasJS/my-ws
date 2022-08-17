import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from '~/components/Logo';

import {
  BrandStyle,
  BurgerStyle,
  HeaderStyle,
  MenuBlockStyle,
  MenuInner,
	MenuItem,
  MenuLinkStyle,
  MenuStyle,
  NavbarStyle,
} from './style'

export function Header() {
	const { pathname } = useRouter();

	return (
    <HeaderStyle>
      <NavbarStyle>
        <Link href="/">
          <BrandStyle>
            <Logo />
          </BrandStyle>
        </Link>
        <BurgerStyle>
          <span/>
          <span/>
          <span/>
        </BurgerStyle>
        <MenuStyle>
          <MenuInner>
            <MenuItem>
              <Link href="/">
                <MenuLinkStyle
									className={pathname === '/' ? 'active' : ''}
								>Inicio</MenuLinkStyle>
              </Link>
							{pathname === '/' ? <span /> : ''}
            </MenuItem>
            <MenuItem>
              <Link href="/products">
                <MenuLinkStyle
									className={pathname === '/products' ? 'active' : ''}
								>Produtos</MenuLinkStyle>
              </Link>
							{pathname === '/products' ? <span /> : ''}
            </MenuItem>
            <MenuItem>
              <Link href="/reviews">
                <MenuLinkStyle
									className={pathname === '/reviews' ? 'active' : ''}
								>Reviews</MenuLinkStyle>
              </Link>
							{pathname === '/reviews' ? <span /> : ''}
            </MenuItem>
            <MenuItem>
              <Link href="/support">
                <MenuLinkStyle
									className={pathname === '/support' ? 'active' : ''}
								>Ajuda</MenuLinkStyle>
              </Link>
							{pathname === '/support' ? <span /> : ''}
            </MenuItem>
          </MenuInner>
        </MenuStyle>
        <Link href='/login'>
          <MenuBlockStyle>Login</MenuBlockStyle>
        </Link>
      </NavbarStyle>
    </HeaderStyle>
  )
}
