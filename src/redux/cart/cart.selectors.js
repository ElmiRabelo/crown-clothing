import { createSelector } from "reselect";

//input selector, retorna uma parte de state, nesse caso retorna cart em state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
			0
		)
);
