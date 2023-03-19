import { createContext } from "react";
export const ActiveProfileContext = createContext({
    active: "",
    setActive: () => {},
  });