import { modeProps } from "../context/ThemeContext";

export function chooseTheme(theme: modeProps) {
   const root = document.getElementById("root") as HTMLDivElement;
   if (theme === "dark") {
      root?.classList.remove("light-theme");
      root?.classList.add("dark-theme");
   } else {
      root?.classList.remove("dark-theme");
      root?.classList.add("light-theme");
   }
}

