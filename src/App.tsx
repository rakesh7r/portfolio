import "./App.css"
import Header from "./components/header"
import { Me } from "./components/Me"
import ThemeContextProvider from "./contexts/theme/ThemeProvider"

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Me />
    </ThemeContextProvider>
  )
}

export default App
