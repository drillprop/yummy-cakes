import { CustomTheme } from "./src/styles/global.styles"

declare module "styled-components" {
  export interface DefaultTheme {
    background: string
    text: string
    red: string
    darkRed: string
  }
}
