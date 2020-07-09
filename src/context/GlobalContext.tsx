import React, { createContext, useReducer, useContext } from "react"

export enum ReducerType {
  SWITCH_THEME,
  SWITCH_CURSOR,
}

type Action =
  | { type: ReducerType.SWITCH_THEME; theme: "light" | "dark" }
  | { type: ReducerType.SWITCH_CURSOR; cursorType: "default" | "pointer" }

const initialState = {
  theme: "dark",
  cursorType: "default",
}

const GlobalStateContext = createContext(initialState)
const GlobalDispatchContext = createContext<React.Dispatch<Action>>(() => {})

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case ReducerType.SWITCH_THEME: {
      return {
        ...state,
        theme: action.theme,
      }
    }
    case ReducerType.SWITCH_CURSOR: {
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
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalContext = () => ({
  state: useContext(GlobalStateContext),
  dispatch: useContext(GlobalDispatchContext),
})

export default GlobalContextProvider
