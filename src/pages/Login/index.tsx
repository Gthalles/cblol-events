import React from "react";
import * as S from "./styles";

import { Background } from "../../components/Background";
import loginBackground from "../../assets/images/login-background.png";
import logo from "../../assets/images/logo.png";

export function Login() {
	return (
		<Background image={ loginBackground }>
			<S.Section>
				<S.Title>Iniciar sessão</S.Title>
				<img src={ logo } alt="CBLOL Events logo" />

				<form>
					<label htmlFor=""></label>
					<input type="text" />

					<label htmlFor=""></label>
					<input type="text" />

					<button>Entrar</button>
					<p>Esqueceu sua senha? <a href="">Clique aqui</a></p>
					<p>Não possui uma conta? <a href="">Cadastre-se</a></p>
				</form>
			</S.Section>
		</Background>
	);
}