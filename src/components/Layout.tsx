import React from "react"

import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/global"
import Header from "./header"

export const darkTheme: DefaultTheme = {
  background: "#212121",
  text: "#FAFAFA",
}

export const lightTheme: DefaultTheme = {
  background: "#FAFAFA",
  text: "#212121",
}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout