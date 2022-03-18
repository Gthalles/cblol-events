import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../services/api";
import { schema } from "./validation";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import { IMessage } from "../../models/message";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";
import { ErrorMessage } from "../../components/ErrorMessage";



export const SignUp: React.FC = () => {
	const [ disable, setDisable ] = useState<boolean>(false);
	const [ errorMessage, setErrorMessage ] = useState<IMessage>();
	const navigate = useNavigate();

	const registerUser = (userData: FieldValues) => {
		setErrorMessage(undefined), setDisable(true);

		setTimeout(async () => {
			setDisable(false);

			API.post("/register-user", userData)
				.then(() => {
					console.log("Registrado com sucesso!");
					navigate("/login");
				}).catch((error: any) => {
					setErrorMessage(error?.response?.data);
				});
		}, 1000);
	};

	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		if (errors.fullname || errors.birthdate || errors.document || errors.email ||  errors.password || errors.confirmPassword) {
			setDisable(true);
		} else {
			setDisable(false);
		}

	}, [ errors.fullname || errors.birthdate || errors.document || errors.email ||  errors.password || errors.confirmPassword ]);

	return (
		<Background image={ background }>
			<S.Section>
				<S.Form onSubmit={ handleSubmit(registerUser) }>
					<S.Title>Cadastre-se</S.Title>
					<S.Logo src={ logo } alt="CBLOL-Events logo"></S.Logo>

					<S.FieldGroup>
						<Field
							id="fullname"
							register={ { ...register("fullname") } }
							type="text"
							placeholder="Nome completo"
							label="Nome"
							errorMessage={ errors.fullname?.message }
							onInput={ () => setErrorMessage(undefined) }
						/>

						<Field
							id="birthdate"	
							register={ { ...register("birthdate") } }
							type="date"
							placeholder="DD/MM/YYYY"
							label="Date de nascimento"
							errorMessage={ errors.birthdate?.message }
							onInput={ () => setErrorMessage(undefined) }
						/>

						<Field
							id="document"
							register={ { ...register("document")  } }
							type="text"
							placeholder="XXX.XXX.XXX-XX"
							label="CPF"
							errorMessage={ errors.document?.message }
							onInput={ () => setErrorMessage(undefined) }
							mask="999.999.999-99"
						/>

						<Field
							id="email"
							register={ { ...register("email") } }
							type="email"
							placeholder="seu_email@exemplo.com"
							label="E-mail"
							errorMessage={ errors.email?.message }
							onInput={ () => setErrorMessage(undefined) }
						/>

						<Field
							id="password"
							register={ { ...register("password") } }
							type="password"
							placeholder="Insira sua senha"
							label="Senha"
							errorMessage={ errors.password?.message }
							onInput={ () => setErrorMessage(undefined) }
						/>

						<Field
							id="confirmPassword"
							register={ { ...register("confirmPassword") } }
							type="password"
							placeholder="Repita sua senha"
							label="Confirmar senha"
							errorMessage={ errors.confirmPassword?.message }
							onInput={ () => setErrorMessage(undefined) }
						/>
					</S.FieldGroup>

					<S.BottomField>
						<ErrorMessage text={ errorMessage?.detail }></ErrorMessage>
						<Button color="#0BC4E2" disabledColor="#0bc5e279" disable={ disable }>Cadastrar</Button>
						<p>Já possuo uma conta. <a href="/login">Fazer login</a></p>
					</S.BottomField>
				</S.Form>
			</S.Section>
		</Background>
	);
};