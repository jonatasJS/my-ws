import Link from 'next/link'

import { Logo } from '~/components/Logo'

import {
  BrandStyle,
  BurgerStyle,
  HeaderStyle,
  MenuBlockStyle,
  MenuInner,
  MenuLinkStyle,
  MenuStyle,
  NavbarStyle,
} from './style'

export function Header() {
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
            <li className="menu-item">
              <Link href="/">
                <MenuLinkStyle>Inicio</MenuLinkStyle>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/products">
                <MenuLinkStyle>Produtos</MenuLinkStyle>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/reviews">
                <MenuLinkStyle>Reviews</MenuLinkStyle>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/support">
                <MenuLinkStyle>Ajuda</MenuLinkStyle>
              </Link>
            </li>
          </MenuInner>
        </MenuStyle>
        <Link href='/login'>
          <MenuBlockStyle>Login</MenuBlockStyle>
        </Link>
      </NavbarStyle>
    </HeaderStyle>
  )
}
