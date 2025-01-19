import { createContext } from "react"

export type themes = "light" | "dark"

type themeContextType = {
  theme: themes
  toggleTheme: () => void
}
const currentTheme = (localStorage.getItem("theme") as themes) || "light"
export const ThemeContext = createContext<themeContextType>({ theme: currentTheme, toggleTheme: () => {} })
