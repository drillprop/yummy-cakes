import React from "react"

import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/global.styles"
import Header from "./header"
import { useGlobalContext } from "../context/GlobalContext"
import Cursor from "./Cursor"

export const darkTheme: DefaultTheme = {
  background: "#212121",
  text: "#FAFAFA",
}

export const lightTheme: DefaultTheme = {
  background: "#FAFAFA",
  text: "#212121",
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
