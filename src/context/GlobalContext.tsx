import React, { createContext, useReducer, useContext } from "react"

type Action = {
  type: string
  theme: string
}

const initialState = {
  theme: "dark",
}

const GlobalStateContext = createContext(initialState)
const GlobalDispatchContext = createContext({})

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SWITCH_THEME": {
      return {
        ...state,
        theme: action.theme,
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
