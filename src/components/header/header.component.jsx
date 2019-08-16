import React from "react";
import { connect } from "react-redux";

//components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//utility
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

//assets and styles
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink
} from "./header.styles";

//Responsvel pelo menu no topo da pagina
const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/">HOME</OptionLink>
			<OptionLink to="/shop">SHOP</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>SAIR</OptionDiv>
			) : (
				<OptionLink to="/signin">ENTRAR</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

// createStructured diminui a quantidade de codigo que escreveria, é como se passasse state como paramentro para cada selector
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

//connect é um High Order Component, o que faz com que Header tenha 'conhecimento' das propriedas de Redux
export default connect(mapStateToProps)(Header);
