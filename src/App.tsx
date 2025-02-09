import './App.css';
import Experience from './components/experience';
import Header from './components/header';
import Me from './components/Me';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import ThemeContextProvider from './contexts/theme/ThemeProvider';

function App() {
	return (
		<div className="select-none flex flex-col gap-4 justify-center items-center">
			<ThemeContextProvider>
				<Header />
				<Me />
				<Projects />
				<Experience />
				<Contact />
				<Footer />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
