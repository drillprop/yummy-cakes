import styled, { css } from "styled-components"

export const CustomCursor = styled.div<{ cursorType: "default" | "pointer" }>`
  position: absolute;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.text};
  pointer-events: none;
  z-index: 999;
  transform: translate(-50%, -50%);
  transition: all 200ms;
  transition-property: width, height;
  ${props =>
    props.cursorType === "pointer" &&
    css`
      background: transparent;
      transform: translate(-50%, -50%) scale(1.5);
      border: 2px solid ${props.theme.text};
    `};
`
