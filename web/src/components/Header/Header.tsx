import "./Header.styles.css";

import spotify from "../../assets/spotify.svg";

import { link } from "../../types";
import { Fragment } from "react";

export const Header = ({ links }: { links: link[] }) => {
	return (
		<div className='full-width grid-container header-bg'>
			<header
				id='top'
				className='header'>
				<a href='#'>
					<img
						className='logo'
						src={spotify}
					/>
				</a>
				<nav className='header-links'>
					{links.map((link, index) =>
						links.length - 1 !== index ? (
							<a
								key={link.text}
								href={link.url}>
								{link.text}
							</a>
						) : (
							<Fragment key={link.text}>
								<span className='header-links-separator'>
									{"|"}
								</span>
								<a href={link.url}>{link.text}</a>
							</Fragment>
						)
					)}
				</nav>
			</header>
		</div>
	);
};
