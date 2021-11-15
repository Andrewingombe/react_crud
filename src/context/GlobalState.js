import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initialise state

const initialState = {
  users: [
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Doe", email: "jane@gmail.com" },
    { id: 3, name: "James Doe", email: "james@gmail.com" },
    { id: 4, name: "Jenny Doe", email: "jenny@gmail.com" },
    { id: 5, name: "Micheal Doe", email: "micheal@gmail.com" },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//Provder
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteUser(id) {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        deleteUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
