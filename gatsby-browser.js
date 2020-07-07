import React from "react"
import GlobalContextProvider from "./src/context/GlobalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
