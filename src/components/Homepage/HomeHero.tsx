import React, { useRef, useEffect } from "react"
import { Hero, Image, Canvas, HeroTitle, HeadLine } from "./home.styles"
import { useWindowSize } from "../../hooks/useWindowSize"

const imageLight = require("../../images/cake-full-light.jpg")

const HomeHero = () => {
  const { width, height } = useWindowSize()
  const canvas = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const background = canvas.current
    if (!background) return
    const eraser = background.cloneNode() as HTMLCanvasElement
    if (!eraser) return

    const eraserCtx = eraser.getContext("2d")
    const backgroundCtx = background.getContext("2d")
    let lastX: number
    let lastY: number
    let moving = false

    if (!backgroundCtx || !eraserCtx) return

    backgroundCtx.globalCompositeOperation = "source-over"
    backgroundCtx.fillStyle = "#000000"
    if (width && height) {
      backgroundCtx.fillRect(0, 0, width, height)
    }

    background.addEventListener("mouseover", ev => {
      moving = true
      lastX = ev.pageX - background.offsetLeft
      lastY = ev.pageY - background.offsetTop
    })

    background.addEventListener("click", ev => {
      moving = true
      lastX = ev.pageX - background.offsetLeft
      lastY = ev.pageY - background.offsetTop
    })

    background.addEventListener("mouseup", ev => {
      moving = false
      lastX = ev.pageX - background.offsetLeft
      lastY = ev.pageY - background.offsetTop
    })

    background.addEventListener("mousemove", ev => {
      if (moving) {
        eraserCtx.globalCompositeOperation = "source-over"
        backgroundCtx.globalCompositeOperation = "destination-out"
        const currentX = ev.pageX - background.offsetLeft
        const currentY = ev.pageY - background.offsetTop
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
      <Image>
        <img src={imageLight} alt="cake image" />
        <Canvas ref={canvas} height={height} width={width}></Canvas>
      </Image>
      <HeroTitle>
        <HeadLine>TASTE</HeadLine>
        <HeadLine>OUR CAKES!</HeadLine>
      </HeroTitle>
    </Hero>
  )
}

export default HomeHero
