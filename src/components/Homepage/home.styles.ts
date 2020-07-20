import styled from "styled-components"
import { motion } from "framer-motion"

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

export const HeroTitle = styled(motion.h1)`
  position: absolute;
  left: 0;
  bottom: -50px;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const HeadLine = styled(motion.span)`
  display: block;
  pointer-events: none;
  font-size: 10rem;
  font-weight: 900;
  line-height: 0.8;
  position: relative;
  z-index: 1;
`
