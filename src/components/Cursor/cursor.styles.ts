import styled, { css } from "styled-components"

export const CustomCursor = styled.div<{ cursorType: "default" | "pointer" }>`
  position: fixed;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.text};
  pointer-events: none;
  z-index: 999;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: transform, border;
  ${props =>
    props.cursorType === "pointer" &&
    css`
      background: transparent;
      transform: translate(-50%, -50%) scale(1.5);
      border: 3px solid ${props.theme.text};
    `};
`
