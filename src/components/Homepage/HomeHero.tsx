import React, { useRef, useEffect } from "react"
import { Hero, Canvas, HeroTitle, HeadLine, ImageWrapper } from "./home.styles"
import { useWindowSize } from "../../hooks/useWindowSize"

const imgLightFull = require("../../images/cake-full-light.jpg")
const imgLightPart = require("../../images/cake-part-light.jpg")

const HomeHero = () => {
  const { width, height } = useWindowSize()
  const canvas = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const background = canvas.current
    if (!background) return
    const eraser = background.cloneNode() as HTMLCanvasElement
    if (!eraser) return
    const image = new Image()
    image.src = imgLightFull
    image.style.height = "100%"
    image.style.width = "100%"
    image.style.objectFit = "cover"

    const eraserCtx = eraser.getContext("2d")
    const backgroundCtx = background.getContext("2d")
    let lastX: number
    let lastY: number
    let moving = false

    if (!backgroundCtx || !eraserCtx) return

    image.onload = () => {
      const pattern = backgroundCtx.createPattern(image, "no-repeat")
      if (pattern) {
        backgroundCtx.fillStyle = pattern
      }
      if (width && height) {
        backgroundCtx.fillRect(0, 0, width, height)
      }
    }

    background.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - background.offsetLeft
      lastY = e.pageY - background.offsetTop
    })

    background.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - background.offsetLeft
      lastY = e.pageY - background.offsetTop
    })

    background.addEventListener("mousemove", e => {
      if (moving) {
        backgroundCtx.globalCompositeOperation = "destination-out"
        const currentX = e.pageX - background.offsetLeft
        const currentY = e.pageY - background.offsetTop
        eraserCtx.lineJoin = "round"
        eraserCtx.moveTo(lastX, lastY)
        eraserCtx.lineTo(currentX, currentY)
        eraserCtx.closePath()
        eraserCtx.lineWidth = 120
        eraserCtx.stroke()
        lastX = currentX
        lastY = currentY
        backgroundCtx.drawImage(eraser, 0, 0)
      }
    })
  }, [])
  return (
    <Hero>
      <ImageWrapper>
        <img src={imgLightPart} alt="cake image" />
        <Canvas ref={canvas} height={height} width={width} />
      </ImageWrapper>
      <HeroTitle>
        <HeadLine>TASTE</HeadLine>
        <HeadLine>OUR CAKES!</HeadLine>
      </HeroTitle>
    </Hero>
  )
}

export default HomeHero
