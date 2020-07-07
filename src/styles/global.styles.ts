import styled, { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    text-decoration: none;
    /* cursor: none; */
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    color: ${props => props.theme.text};
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
    transition: background 200ms;
  }
`

export const Wrapper = styled.div<{ fluid?: boolean }>`
  flex-grow: 1;
  padding: 32px;
  margin: 0 auto;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `};
`

interface FlexBoxProps {
  spaceBetween?: boolean
  flexEnd?: boolean
  alignTop?: boolean
  noHeight?: boolean
}

export const FlexBox = styled.div<FlexBoxProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: top;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`

export default GlobalStyle
