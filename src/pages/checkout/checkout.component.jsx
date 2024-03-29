import React from "react";

//utility
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal
} from "../../redux/cart/cart.selectors";

//components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(item => (
			<CheckoutItem key={item.id} cartItem={item} />
		))}
		{<span className="total">TOTAL: ${total}</span>}
		<div className="test-warning">
			*Use os seguintes dados para testar pagamentos*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
