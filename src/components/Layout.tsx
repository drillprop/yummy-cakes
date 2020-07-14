import React from "react"

import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/global.styles"
import Header from "./Header/Header"
import { useGlobalContext } from "../context/GlobalContext"
import Cursor from "./Cursor"

const commonTheme = {
  red: "#8E020C",
  darkRed: "#51000A",
}

export const darkTheme: DefaultTheme = {
  background: "#000",
  text: "#FAFAFA",
  ...commonTheme,
}

export const lightTheme: DefaultTheme = {
  background: "#FAFAFA",
  text: "#000",
  ...commonTheme,
}

const Layout: React.FC = ({ children }) => {
  const { state } = useGlobalContext()
  return (
    <ThemeProvider theme={state.theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
