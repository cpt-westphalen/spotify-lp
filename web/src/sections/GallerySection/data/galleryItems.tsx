import albumCover1 from "../../../assets/img1.jpg";
import albumCover2 from "../../../assets/img2.jpg";
import albumCover3 from "../../../assets/img3.jpg";
import albumCover4 from "../../../assets/img4.jpg";

import extraCover1 from "../../../assets/1.jpeg";
import extraCover2 from "../../../assets/2.jpeg";
import extraCover3 from "../../../assets/3.jpeg";
import extraCover4 from "../../../assets/4.jpeg";

import A0 from "./articles/Article0";
import A1 from "./articles/Article1";
import A2 from "./articles/Article2";
import Extra from "./articles/Extra";

export const galleryItems = [
	{
		img: { alt: "", url: albumCover1 },
		article: <A0 />,
	},
	{
		img: { alt: "", url: albumCover2 },
		article: <A1 />,
	},
	{
		img: { alt: "", url: extraCover1 },
		article: null,
	},
	{
		img: { alt: "", url: extraCover2 },
		article: null,
	},
	{
		img: { alt: "", url: albumCover3 },
		article: <A2 />,
	},
	{
		img: { alt: "", url: albumCover4 },
		article: null,
	},
	{
		img: { alt: "", url: extraCover3 },
		article: <Extra />,
	},
	{
		img: { alt: "", url: extraCover4 },
		article: null,
	},
];
