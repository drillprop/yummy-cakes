import React, { useState, useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"
import { CustomCursor } from "./cursor.styles"

const Cursor = () => {
  const { state } = useGlobalContext()
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (e: MouseEvent) => {
    const { pageX: x, pageY: y } = e
    setCursorPos({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <CustomCursor
      cursorType={state.cursorType}
      style={{
        left: cursorPos.x + "px",
        top: cursorPos.y + "px",
      }}
    />
  )
}

export default Cursor
