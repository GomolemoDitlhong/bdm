import React from "react";
export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_ARTICLES":
        return { ...state, articles: action.articles };
      case "LOAD_SINGLE_ARTICLE":
        return { ...state, activeArticle: action.article };
      default:
        return state;
    }
  };
  const [appData, appDispatch] = React.useReducer(reducer, {
    articles: [],
    activeArticle: { id: 0 },
  });
  return <AppContext.Provider value={{ appData, appDispatch }}>{children}</AppContext.Provider>;
};
