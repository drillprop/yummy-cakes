import React from "react"
import { HeaderNav, Logo, Menu } from "../styles/header.styles"
import { Wrapper, FlexBox } from "../styles/global.styles"
import { Link } from "gatsby"

function Header() {
  return (
    <HeaderNav>
      <Wrapper>
        <FlexBox spaceBetween noHeight>
          <Logo>
            <Link to="/">Yummy Cakes</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </FlexBox>
      </Wrapper>
    </HeaderNav>
  )
}

export default Header
