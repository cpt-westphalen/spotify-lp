import spotify from "../../assets/spotify.svg";

export const Footer = () => {
	return (
		<footer>
			<nav>
				<img src={spotify} />
				<div>[coluna 1]</div>
				<div>[coluna 2]</div>
				<div>[coluna 3]</div>
				<div>[social media icons]</div>
			</nav>
		</footer>
	);
};
