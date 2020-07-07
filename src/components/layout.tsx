import React from "react"

import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/global"

export const darkTheme: DefaultTheme = {
  background: "#000",
  text: "#fff",
}

export const lightTheme: DefaultTheme = {
  background: "#fff",
  text: "#000",
}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout
