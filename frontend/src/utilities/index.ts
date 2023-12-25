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

let timerId = 0
export function handleScrolling(e: React.UIEvent<HTMLUListElement, UIEvent>) {
   const element = e.target as HTMLDivElement

   if (timerId !== 0) clearTimeout(timerId);
   element.classList.add("scroll");

   timerId = setTimeout(() => {
      element.classList.remove("scroll");
      clearTimeout(timerId)
   }, 500)
}

