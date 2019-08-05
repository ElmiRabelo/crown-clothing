import React, { Component } from "react";
import SHOP_DATA from "./2.2 shop.data.js";

import "./shop.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				<h1>Shop Page</h1>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
