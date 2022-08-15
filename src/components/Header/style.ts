import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transition: all 0.35s ease;
`

export const BurgerStyle = styled.div`
  position: relative;
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
  @media (min-width: 720px) {
    display: none;
    visibility: hidden;
  }

  span {
    position: absolute;
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

  &.is-active span {
    &:nth-child(1) {
      top: 0.5rem;
      transform: rotate(135deg);
    }
    &:nth-child(2) {
      right: -1.5rem;
      opacity: 0;
      visibility: hidden;
    }
    &:nth-child(3) {
      top: 0.5rem;
      transform: rotate(-135deg);
    }
  }
`

export const MenuStyle = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: auto;
  padding: 4rem 0 3rem;
  overflow: hidden;
  background-color: var(--color-black-300);
  box-shadow: var(--shadow-medium);
  transition: all 0.4s ease-in-out;

  @media (min-width: 720px) {
    position: relative;
    top: 0;
    width: auto;
    height: auto;
    padding: 0rem;
    margin-left: auto;
    background: none;
    box-shadow: none;
  }
`

export const NavbarStyle = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  width: 100%;
  height: 4.25rem;
  margin: 0 auto;
  min-width: 75rem;
  padding: 0 1.25rem;
`

export const MenuInner = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 1.25rem;
  margin: 0 auto;
  column-gap: 2rem;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    margin: 0 auto;
  }
`

export const MenuLinkStyle = styled.a`
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  line-height: 1.5;
  color: var(--color-white-100);
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-blue-400);
  }

  @media (min-width: 720px) {
    text-transform: capitalize;
  }
`

export const MenuBlockStyle = styled.a`
  display: inline-block;
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

  @media (min-width: 720px) {
    /* margin-left: 2rem; */
  }
`

export const BrandStyle = styled.a`
  font-family: inherit;
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
`
