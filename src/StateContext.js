import React, { useReducer } from "react";
import { createContext } from "react";

export const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "DRAWER":
        console.log(action.drawer);
        return { ...state, drawer: action.drawer };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    drawer: false,
  });
  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
