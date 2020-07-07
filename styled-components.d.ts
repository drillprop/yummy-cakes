import { CustomTheme } from "./src/styles/global"

declare module "styled-components" {
  export interface DefaultTheme {
    background: string
    text: string
  }
}
