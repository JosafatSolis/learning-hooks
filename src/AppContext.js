import React, { createContext, useState, useEffect } from "react";
import { getTodos } from "./services/todoService";

export const AppContext = createContext();

// Se hace el destructuring de props.children  , siempre tiene que llamarse "children",
// que es lo que está dentro del componente
const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  }, []);

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
