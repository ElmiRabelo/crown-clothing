import React from "react";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{/* Para cada objeto dentro de item, estou criando uma div com uma key e renderizando o nome do item. Filter está limitando o número de items-filhos para 4. */}
			{items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<div key={item.id}>{item.name}</div>
				))}
		</div>
	</div>
);

export default CollectionPreview;
