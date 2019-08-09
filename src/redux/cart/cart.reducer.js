import { CartActionsTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITITAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITITAL_STATE, action) => {
	switch (action.type) {
		case CartActionsTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionsTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;
