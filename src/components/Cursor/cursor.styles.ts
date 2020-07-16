import styled, { css } from "styled-components"

export const CustomCursor = styled.div<{ cursorType: "default" | "pointer" }>`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.text};
  z-index: 99;
  transition: transform 200ms;
  ${props =>
    props.cursorType === "pointer" &&
    css`
      background: transparent;
      transform: translate(-50%, -50%) scale(1.5);
      border: 3px solid ${props.theme.text};
    `};
`
