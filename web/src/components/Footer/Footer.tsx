import spotify from "../../assets/spotify.svg";

import socialMediaIcon1 from "../../assets/facebook.png";
import socialMediaIcon2 from "../../assets/instagram.png";
import socialMediaIcon3 from "../../assets/twitter.png";

import "./Footer.styles.css";

export const Footer = () => {
	return (
		<footer className='full-width grid-container'>
			<nav>
				<div className='logo-container'>
					<a href='#top'>
						<img
							className='logo'
							src={spotify}
						/>
					</a>
				</div>
				<ul
					aria-label='links diversos'
					className='footer-links'>
					<li className='footer-group'>
						<h6>{"COMPANY"}</h6>
						<ul>
							<li>
								<a href='#'>Sobre</a>
							</li>
							<li>
								<a href='#'>Empregos</a>
							</li>
							<li>
								<a href='#'>Imprensa</a>
							</li>
							<li>
								<a href='#'>Novidades</a>
							</li>
						</ul>
					</li>

					<li className='footer-group'>
						<h6>{"COMUNIDADES"}</h6>
						<ul>
							<li>
								<a href='#'>Artistas</a>
							</li>
							<li>
								<a href='#'>Desenvolvedores</a>
							</li>
							<li>
								<a href='#'>Marcas</a>
							</li>
						</ul>
					</li>

					<li className='footer-group'>
						<h6>{"LINKS ÚTEIS"}</h6>
						<ul>
							<li>
								<a href='#'>Ajuda</a>
							</li>
							<li>
								<a href='#'>Presentes</a>
							</li>
							<li>
								<a href='#'>Player na web</a>
							</li>
						</ul>
					</li>
				</ul>
				<ul
					className='footer-social-media'
					aria-label='Redes sociais'>
					<li>
						<a href='#'>
							<img src={socialMediaIcon1} />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={socialMediaIcon2} />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={socialMediaIcon3} />
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
