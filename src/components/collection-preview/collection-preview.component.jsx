import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{}
			{/* Para cada objeto dentro de item, estou criando uma div com uma key e renderizando o nome do item. Filter está limitando o número de items-filhos para 4. */
			//em map, item esta passando todo o ITEM como uma propriedade, ou seja, o objeto com seus key: value pars.
			//desse modo posso utilizar addItem(redux action) em collection-item e adicionar o item inteiro como parametro e adiciona-lo em cart-dropdown
			items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
