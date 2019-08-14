import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

//resposavel por exibir os itens individuais das collection, o 'menor' item de collection
const CollectionItem = ({ item, addItem }) => {
	//destroturing item para utilizar suas props, item então é passado como objeto para addItem(redux action)
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				Adicionar
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem);
