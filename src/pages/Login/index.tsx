import React, { useEffect, useState } from "react";
import { useUserContext } from "../../providers/UserProvider";
import * as S from "./styles";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import loginBackground from "../../assets/images/login-background.png";
import logo from "../../assets/images/logo.png";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";

export const Login: React.FC = () => {
	const [ disable, setDisable ] = useState(false);

	const { login } = useUserContext();

	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		if (errors.email || errors.password) {
			setDisable(true);
		} else {
			setDisable(false);
		}

	}, [ errors.email, errors.password ]);


	function authenticate(credentials: FieldValues) {
		if (credentials) {
			login(credentials.email, credentials.password);
			setDisable(true);
			setTimeout(() => {
				setDisable(false);
			}, 2000);
		}
	}

	return (
		<Background image={ loginBackground }>
			<S.Section>
				<S.Title>Iniciar sessão</S.Title>
				<S.Logo src={ logo } alt="CBLOL-Events logo" />

				<S.Form onSubmit={ handleSubmit(authenticate) }>
					<Field id="email" register={ { ...register("email") } } type="text" placeholder="seu_email@exemplo.com" label="E-mail" errorMessage={ errors.email?.message } />

					<Field id="password" register={ {...register("password") } } type="password" placeholder="Insira sua senha" label="Senha" errorMessage= { errors.password?.message } />

					<Button color="#0BC4E2" disabledColor="#0bc5e279" disable={ disable }>
						Enviar
					</Button>	

					<p>Esqueceu a sua senha? <a href="">Clique aqui</a></p>
					<p>Não possui uma conta? <a href="/sign-up">Cadastre-se</a></p>
				</S.Form>
			</S.Section>
		</Background>
	);
};