import "./Header.styles.css";

import spotify from "../../assets/spotify.svg";

import { link } from "../../types";

export const Header = ({ links }: { links: link[] }) => {
	return (
		<div className='full-width grid-container header-bg'>
			<header
				id='top'
				className='header'>
				<div className=''>
					<img
						className='logo'
						src={spotify}
					/>
				</div>
				<nav className='header-links'>
					{links.map((link, index) =>
						links.length - 1 !== index ? (
							<a
								key={link.text}
								href={link.url}>
								{link.text}
							</a>
						) : (
							<>
								<span className='header-links-separator'>
									{"|"}
								</span>
								<a
									key={link.text}
									href={link.url}>
									{link.text}
								</a>
							</>
						)
					)}
				</nav>
			</header>
		</div>
	);
};
