import styled from "styled-components"

export const HeaderNav = styled.header`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 37px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }
`

export const Menu = styled.div`
  button {
    cursor: pointer;
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      border-radius: 4px;
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
      transition: transform 200ms;
    }
    span:last-of-type {
      transform-origin: left;
      transform: scaleX(0.7);
    }
    :hover span:last-of-type {
      transform: scaleX(1);
    }
  }
`
