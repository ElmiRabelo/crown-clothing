import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		{/* input recebe a função handleChange de sign-in e a cada mudança no input ele invoca essa função, assim elevando o evento. */}
		<input className="form-input" onChange={handleChange} {...otherProps} />
		{label ? (
			<label
				className={`${
					otherProps.value.length ? "shrink" : ""
				} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
