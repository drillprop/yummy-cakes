import React from "react"
import { HeaderNav, Logo, Menu } from "../styles/header.styles"
import { Wrapper, FlexBox } from "../styles/global.styles"
import { Link } from "gatsby"
import { useGlobalContext, ReducerType } from "../context/GlobalContext"

function Header() {
  const { dispatch, state } = useGlobalContext()

  const toggleTheme = () => {
    if (state.theme === "dark") {
      dispatch({ type: ReducerType.SWITCH_THEME, theme: "light" })
    } else {
      dispatch({ type: ReducerType.SWITCH_THEME, theme: "dark" })
    }
  }

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -42, opacity: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.5, 0.04, -0.01, 0.8],
      }}
    >
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
