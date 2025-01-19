import { useEffect, useState } from "react"
import { ThemeContext, themes } from "./ThemeContext"

type ThemeContextProviderType = {
  children: React.ReactNode
}

const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
  const currentTheme = (localStorage.getItem("theme") as themes) || "light"
  const [theme, setTheme] = useState<themes>(currentTheme)

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark")
    }
  }, [currentTheme])

  const toggleTheme = () => {
    document.body.classList.toggle("dark")
    setTheme((prevTheme) => {
      const currentTheme = prevTheme === "light" ? "dark" : "light"
      localStorage.setItem("theme", currentTheme)
      return currentTheme
    })
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
