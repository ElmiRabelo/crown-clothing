import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = evt => {
		const { name, value } = evt.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async evt => {
		evt.preventDefault();

		const { email, password } = this.state;

		//Faz o login no site utilizando email e password utilizando o metodo fornecido por google auth. Em seguida reseta o form.
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log("Erro ao tentar logar com usuário", error);
		}

		this.setState({ email: "", password: "" });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>Eu já tenho uma conta</h2>
				<span>Entre com seu email e senha</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="senha"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Entrar</CustomButton>
						<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
							Entrar com Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
