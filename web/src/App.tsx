import "./App.css";
import { TopBar } from "./components/TopBar";
import { CarouselSection } from "./sections/CarouselSection";
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
			<TopBar links={links} />
			<CarouselSection />
		</div>
	);
}

export default App;
