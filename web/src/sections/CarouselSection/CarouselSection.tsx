import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselSection.styles.css";

import { FaMusic } from "react-icons/fa";

export const CarouselSection = () => {
	return (
		<div className='full-width grid-container carousel-section-bg'>
			<div className='carousel-container'>
				<Carousel
					autoPlay
					infiniteLoop
					dynamicHeight={false}
					ariaLabel='Banner do Site'
					showThumbs={false}
					showStatus={false}
					interval={5000}>
					<section>
						<div>
							<h1>Música para todos</h1>
							<button>Aproveite o Spotify Free</button>
							<button>Obter o Spotify Premium</button>
						</div>
					</section>
					<section>
						<div>
							<h1>As melhores rádios</h1>
							<button>
								<FaMusic />
								Ouça agora
							</button>
						</div>
					</section>
				</Carousel>
			</div>
		</div>
	);
};
