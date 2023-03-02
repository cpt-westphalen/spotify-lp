import spotify from "../assets/spotify.svg";
import { link } from "../types";

export const Header = ({ links }: { links: link[] }) => {
	return (
		<header>
			<img src={spotify} />
			<nav>
				{links.map((link) => (
					<a
						key={link.text}
						href={link.url}>
						{link.text}
					</a>
				))}
			</nav>
		</header>
	);
};
