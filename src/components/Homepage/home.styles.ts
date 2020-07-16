import styled from "styled-components"

export const Hero = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 250px;
`

export const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`

export const HeroTitle = styled.h1`
  position: absolute;
  bottom: -50px;
  color: ${props => props.theme.text};
`

export const HeadLine = styled.span`
  font-size: 10rem;
  font-weight: 900;
  line-height: 0.8;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 60px;
    top: 60px;
    height: 60%;
    background: ${({ theme }) => theme.background};
  }
  :first-of-type::before {
  }
`
