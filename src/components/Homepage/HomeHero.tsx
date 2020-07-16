import React, { useRef, useEffect, useState } from "react"
import { Hero, Canvas, HeroTitle, HeadLine, VideoWrapper } from "./home.styles"
import { useWindowSize } from "../../hooks/useWindowSize"

const img = require("../../assets/cake-full-light.jpg")
const video = require("../../assets/video.mp4")

const HomeHero = () => {
  const { width, height } = useWindowSize()
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const contextRef = useRef<null | CanvasRenderingContext2D>(null)

  const [isErasing, setIsErasing] = useState(false)

  useEffect(() => {
    const background = canvasRef.current
    if (!background) return

    const backgroundCtx = background.getContext("2d")
    if (!backgroundCtx) return

    backgroundCtx.lineCap = "round"
    backgroundCtx.lineWidth = 120
    contextRef.current = backgroundCtx

    const image = new Image()
    image.style.objectFit = "cover"
    image.style.height = "100%"
    image.style.width = "100%"
    image.src = img
    image.onload = () => {
      const pattern = backgroundCtx.createPattern(image, "no-repeat")
      if (pattern) {
        backgroundCtx.fillStyle = pattern
      }
      if (width && height) {
        backgroundCtx.fillRect(0, 0, width, height)
      }
    }
  }, [])

  const startErasing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent
    if (!contextRef.current) return
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsErasing(true)
  }

  const finishErasing = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (!contextRef.current) return
    contextRef.current.closePath()
    setIsErasing(false)
  }

  const erase = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent

    if (!contextRef.current || !isErasing) return
    contextRef.current.globalCompositeOperation = "destination-out"
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
  return (
    <Hero>
      <VideoWrapper>
        <video muted autoPlay loop playsInline src={video} />
        <Canvas
          width={width}
          height={height}
          ref={canvasRef}
          onMouseOver={startErasing}
          onMouseUp={finishErasing}
          onMouseMove={erase}
        />
      </VideoWrapper>
      <HeroTitle>
        <HeadLine>TAKE</HeadLine>
        <br />
        <HeadLine>A BITE!</HeadLine>
      </HeroTitle>
    </Hero>
  )
}

export default HomeHero
