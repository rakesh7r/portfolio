import './App.css'
import Header from './components/header'
import ThemeContextProvider from './contexts/theme/ThemeProvider'

function App() {
    return (
        <div className="select-none">
            <ThemeContextProvider>
                <Header />
            </ThemeContextProvider>
        </div>
    )
}

export default App
