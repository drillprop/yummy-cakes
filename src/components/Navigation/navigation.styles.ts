import styled from "styled-components"

export const Nav = styled.nav`
  background-color: #444;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  z-index: 98;
  height: 100%;
  width: 50%;
  align-items: center;
`

export const NavList = styled.ul`
  margin: 10rem 0 0 6rem;
  padding: 0;
  li {
    margin: 0;
    list-style: none;
    font-size: 3rem;
    text-transform: uppercase;
    height: 96px;
    line-height: 96px;
    overflow: hidden;
    a {
      font-size: 4rem;
      color: #fff;
    }
  }
`
export const NavFooter = styled.footer``
