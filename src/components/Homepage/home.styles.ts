import styled from "styled-components"
import { motion } from "framer-motion"

export const Hero = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 250px;
`

export const Image = styled.div`
  height: 100%;
  width: 100%;
  img {
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
  display: block;
  font-weight: 900;
  line-height: 0.8;
`
