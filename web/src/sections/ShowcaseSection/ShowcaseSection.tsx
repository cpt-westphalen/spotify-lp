import { useEffect, useRef } from "react";
import appShowcase from "../../assets/iphone1.png";
import appShowcase2 from "../../assets/iphone2.png";

import "./ShowcaseSection.styles.css";

export const ShowcaseSection = () => {
	const imgsRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, _) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("slide-down");
					} else {
						entry.target.classList.remove("slide-down");
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.2,
			}
		);
		if (imgsRef.current) {
			observer.observe(imgsRef.current);
		}
		return () => {
			if (imgsRef.current) observer.unobserve(imgsRef.current);
		};
	}, []);

	return (
		<div className='full-width grid-container theme-bg'>
			<section className='showcase-section'>
				<div className='article-container'>
					<article>
						<h2>Fácil</h2>
						<h3>Buscar</h3>
						<p>
							{
								"Já sabe o que quer escutar?\nÉ só procurar e apertar o play."
							}
						</p>
						<h3>Navegar</h3>
						<p>
							{
								"Veja os novos lançamentos, o que está bombando nas paradas e as melhores playlists para o seu momento."
							}
						</p>
						<h3>Descobrir</h3>
						<p>
							{
								"Curta músicas novas toda segunda-feira com uma playlist personalizada pra você. Ou relaxe e curta uma das rádios."
							}
						</p>
					</article>
				</div>
				<div
					className='images'
					ref={imgsRef}>
					<img
						loading='lazy'
						src={appShowcase}
						alt={
							'iPhone com aplicativo do Spotify aberto, tocando a playlist "Discover Weekly", música "Let\'s talk about gender", artista "Planningtorock"'
						}
					/>
					<img
						loading='lazy'
						src={appShowcase2}
						alt={
							'iPhone com aplicativo do Spotify aberto na lista de músicas da playlist "Discover Weekly",apresenta botão de tocar músicas em ordem aleatória, ativado botão de "Disponível Offline". Na lista, as músicas "I just wanna: ride" de "Yeek", "No Eyes (feat. Jaw) - Radio Edit" de "Claptone" e "Heartbreaker" de "MSTRKRFT".'
						}
					/>
				</div>
			</section>
		</div>
	);
};
