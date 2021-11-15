import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initialise state

const initialState = {
  users: [],
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

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  function editUser(user) {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        deleteUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
