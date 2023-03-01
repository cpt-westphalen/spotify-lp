import "./App.css";
import { Header } from "./components/Header";
import { CarouselSection } from "./sections/CarouselSection/CarouselSection";
import { link } from "./types";

const links: link[] = [
	{ text: "Premium", url: "#" },
	{ text: "Ajuda", url: "#" },
	{ text: "Baixar", url: "#" },
	{ text: "Entrar", url: "#" },
];

function App() {
	return (
		<div className='App'>
			<Header links={links} />
			<CarouselSection />
		</div>
	);
}

export default App;
