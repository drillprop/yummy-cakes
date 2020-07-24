import React from "react"
import { useGlobalContext } from "../context/GlobalContext"

const useChangeCursor = () => {
  const { dispatch } = useGlobalContext()

  const changeCursorHandlers = {
    onMouseMove: () =>
      dispatch({ type: "SWITCH_CURSOR", cursorType: "pointer" }),
    onMouseLeave: () =>
      dispatch({ type: "SWITCH_CURSOR", cursorType: "default" }),
  }
  return changeCursorHandlers
}

export default useChangeCursor
