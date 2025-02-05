import './App.css';
import Header from './components/header';
import Me from './components/me';
import Projects from './components/projects';

import ThemeContextProvider from './contexts/theme/ThemeProvider';

function App() {
	return (
		<div className="select-none flex flex-col gap-4 justify-center">
			<ThemeContextProvider>
				<Header />
				<Me />
				<Projects />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
