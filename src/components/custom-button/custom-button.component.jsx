import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

//Sobre isGoogleSignIn: se a propriedade foi passada como prop então será true, o que vai aplicar a classe unica de google=sign-in. Se a prop não foi passada é false, a classe não se aplica.
const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
