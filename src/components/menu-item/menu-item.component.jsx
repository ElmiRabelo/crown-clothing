import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

//Reponsavel pelos Itens individuais que estão presente na homepage, recebe as propriedas passadas Directory
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div
		className={`${size} menu-item`}
		// desse modo estou criando um link dinamico, onde posso acessar esse item em qualquer lugar do meu app sem precisar ter um caminho especifico.
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className="background-image"
		/>
		<div className="content">
			<h1 className="title">{title}</h1>
			<span className="subtitle">Compre Agora</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
