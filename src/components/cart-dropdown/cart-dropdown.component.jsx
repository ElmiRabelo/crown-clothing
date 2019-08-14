import React from "react";

//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//components e styles
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

//Responsavel pelo cart dropdown, mostrar os intens no carrinho em um dropdown
const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map(item => <CartItem key={item.id} item={item} />)
			) : (
				<span className="empty-message">Seu carrinho está vazio</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			Ir para pagamento
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
