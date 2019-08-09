import React from "react";

import "./custom-button.styles.scss";

//Sobre isGoogleSignIn: se a propriedade foi passada como prop então será true, o que vai aplicar a classe unica de google=sign-in. Se a prop não foi passada é false, a classe não se aplica.
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
