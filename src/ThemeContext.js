import { createContext } from "react";

const init = {
  foreground: "#ffffff",
  background: "#222222",
};

let ThemeContext = createContext(init);

export default ThemeContext;
