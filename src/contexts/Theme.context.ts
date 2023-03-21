import  { createContext } from "react";
import Theme from "../styles/Theme";

const ThemeContext = createContext(Theme);

export const { Consumer, Provider } = ThemeContext;