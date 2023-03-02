import "./GallerySection.styles.css";
import { image } from "../../types";
import { useEffect, useState } from "react";

type GallerySectionProps = {
	items: {
		img: image;
		article: JSX.Element | null;
	}[];
};

export const GallerySection = ({ items }: GallerySectionProps) => {
	const [isShowingArticle, setIsShowingArticle] = useState(true);
	const [article, setArticle] = useState<{
		index: number;
		jsx: JSX.Element | null;
	} | null>(null);

	const showArticle = (index: number) => {
		console.log("is showing article " + index);
		setIsShowingArticle(true);
		setArticle({ index, jsx: items[index].article });
	};

	const closeArticle = () => {
		console.log("close article called");
		if (isShowingArticle) setIsShowingArticle(false);
		setArticle(null);
	};

	return (
		<div
			className='full-width grid-container gallery-bg'
			onClick={closeArticle}>
			<section className='gallery-section'>
				<div className='gallery'>
					{items.map((item, index) => (
						<div
							key={item.img.url + index}
							className={`gallery-item ${
								item.article === null ? "no-article" : ""
							}`}
							onClick={(e) => {
								e.stopPropagation();
								showArticle(index);
							}}>
							<img
								src={item.img.url}
								alt={item.img.alt ?? "Capa de Álbum"}
							/>
						</div>
					))}
				</div>
				{isShowingArticle && article && (
					<article
						onClick={(e) => e.stopPropagation()}
						className={`gallery-article ${
							[0, 1, 4, 5].includes(article.index)
								? "right"
								: "left"
						}`}>
						{article.jsx}
					</article>
				)}
			</section>
		</div>
	);
};
