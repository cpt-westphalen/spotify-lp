import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CarouselSection } from "./sections/CarouselSection/CarouselSection";
import { GallerySection } from "./sections/GallerySection/GallerySection";
import { ShowcaseSection } from "./sections/ShowcaseSection/ShowcaseSection";
import { link } from "./types";

const links: link[] = [
	{ text: "Premium", url: "#" },
	{ text: "Ajuda", url: "#" },
	{ text: "Baixar", url: "#" },
	{ text: "Entrar", url: "#" },
];

function App() {
	return (
		<div className='grid-container app'>
			<Header links={links} />
			<CarouselSection />
			<GallerySection />
			<ShowcaseSection />
			<Footer />
		</div>
	);
}

export default App;
