import { ThemeContext } from "@/contexts/theme/ThemeContext"
import { useContext } from "react"

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <button className="text-white" onClick={toggleTheme}>
        {theme === "light" ? "light" : "dark"}
      </button>
    </>
  )
}
