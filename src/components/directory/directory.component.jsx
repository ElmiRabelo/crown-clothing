import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

//Responsavel por conter os itens da pagina inicial que servem como menu para as paginas das coleções, é passado as propriedades de sections(provindas do redux store)
const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
