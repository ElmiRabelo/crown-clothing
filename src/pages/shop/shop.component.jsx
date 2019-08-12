import React, { Component } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import "./shop.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
	<div className="shop-page">
		<h1>Shop Page</h1>
		<CollectionsOverview />
	</div>
);

export default ShopPage;
