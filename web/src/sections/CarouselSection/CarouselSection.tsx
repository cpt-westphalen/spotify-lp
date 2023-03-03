import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselSection.styles.css";

import { FaMusic } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const CarouselSection = () => {
	function renderArrowNext(handleClick: () => void, hasNext: boolean) {
		return (
			<button
				disabled={!hasNext}
				onClick={handleClick}
				className='carousel-arrow next'
				aria-label={"Próximo banner"}>
				<BsChevronRight size={64} />
			</button>
		);
	}
	function renderArrowPrev(handleClick: () => void, hasNext: boolean) {
		return (
			<button
				disabled={!hasNext}
				onClick={handleClick}
				className='carousel-arrow prev'
				aria-label={"Próximo banner"}>
				<BsChevronLeft size={64} />
			</button>
		);
	}
	return (
		<section className='full-width grid-container carousel-section-bg'>
			<div className='carousel-container'>
				<Carousel
					autoPlay
					infiniteLoop
					showIndicators={false}
					dynamicHeight={false}
					ariaLabel='Banner do Site'
					showThumbs={false}
					showStatus={false}
					interval={5000}
					renderArrowNext={renderArrowNext}
					renderArrowPrev={renderArrowPrev}>
					<section>
						<div>
							<h1>Música para todos</h1>
							<button className='cta-button highlight'>
								Aproveite o Spotify Free
							</button>
							<button className='cta-button'>
								Obter o Spotify Premium
							</button>
						</div>
					</section>
					<section>
						<div>
							<h1>As melhores rádios</h1>
							<button className='cta-button icon'>
								<FaMusic />
								Ouça agora
							</button>
						</div>
					</section>
				</Carousel>
			</div>
		</section>
	);
};
