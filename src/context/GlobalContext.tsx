import React, { createContext, useReducer, useContext } from "react"

type Action =
  | { type: "SWITCH_THEME"; theme: "light" | "dark" }
  | { type: "SWITCH_CURSOR"; cursorType: "default" | "pointer" }

type InitialState = {
  theme: "light" | "dark"
  cursorType: "default" | "pointer"
}

const initialState: InitialState = {
  theme: "light",
  cursorType: "default",
}

const GlobalContext = createContext<{
  state: typeof initialState
  dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch: () => {} })

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SWITCH_THEME": {
      return {
        ...state,
        theme: action.theme,
      }
    }
    case "SWITCH_CURSOR": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
    default: {
      return state
    }
  }
}

const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider
