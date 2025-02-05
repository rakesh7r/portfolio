import './App.css'
import Header from './components/header'
import { Me } from './components/Me'
import ThemeContextProvider from './contexts/theme/ThemeProvider'

function App() {
    return (
        <div>
            <ThemeContextProvider>
                <Header />
                <Me />
            </ThemeContextProvider>
        </div>
    )
}

export default App
