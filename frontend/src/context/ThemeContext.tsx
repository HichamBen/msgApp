import { ReactNode, createContext, useLayoutEffect, useState } from "react";
import { chooseTheme } from "../utilities";

export type modeProps = "dark" | "light";

type ThemeContextProps = {
  theme: modeProps;
  setTheme: React.Dispatch<React.SetStateAction<modeProps>>;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

// create a theme context
const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<modeProps>("dark");

  useLayoutEffect(() => {
    // put theme on the default mode of the browser
    // if it doesn't choosing by the client
    if (!localStorage.getItem("msgApp-mode")) {
      window.matchMedia &&
      window.matchMedia("prefers-color-scheme: dark").matches
        ? chooseTheme("dark")
        : chooseTheme("light");
    } else {
      const ThemeMode = localStorage.getItem("msgApp-mode") as "dark" | "light";
      chooseTheme(ThemeMode);
      setTheme(ThemeMode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
