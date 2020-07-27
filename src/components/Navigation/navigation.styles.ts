import styled from "styled-components"

export const Nav = styled.nav`
  background-color: #444;
  position: fixed;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  z-index: 98;
  height: 100%;
  width: 100%;
  align-items: center;
`

export const NavList = styled.ul`
  margin: 10rem 0 0 0;
  position: relative;
  padding: 0;
  ::before {
    left: -130px;
    content: "";
    background-color: #444;
    position: absolute;
    width: 120px;
    z-index: 100;
    height: 100%;
  }
  li {
    display: flex;
    align-items: center;
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
    svg {
      fill: #fff;
      margin-right: 20px;
    }
  }
`
export const NavFooter = styled.footer``
