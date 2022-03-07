import React, { useEffect } from "react";
import * as S from "./styles";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./validation";
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";

useEffect(() => {
	console.log();
}, []);


const registerUser = (userData: FieldValues) => {
	console.log(userData);
};

export const SignUp: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
		resolver: yupResolver(schema)
	});

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
						/>

						<Field
							id="birthDate"
							register={ { ...register("birthDate") } }
							type="date"
							placeholder="DD/MM/YYYY"
							label="Date de nascimento"
							errorMessage={ errors.birthDate?.message }
						/>

						<Field
							id="document"
							register={ { ...register("document")  } }
							type="text"
							placeholder="XXX.XXX.XXX-XX"
							label="CPF"
							errorMessage={ errors.document?.message }
						/>

						<Field
							id="email"
							register={ { ...register("email") } }
							type="email"
							placeholder="seu_email@exemplo.com"
							label="E-mail"
							errorMessage={ errors.email?.message }
						/>

						<Field
							id="password"
							register={ { ...register("password") } }
							type="password"
							placeholder="Insira sua senha"
							label="Senha"
							errorMessage={ errors.password?.message }
						/>

						<Field
							id="confirmPassword"
							register={ { ...register("confirmPassword") } }
							type="password"
							placeholder="Repita sua senha"
							label="Confirmar senha"
							errorMessage={ errors.confirmPassword?.message }
						/>
					</S.FieldGroup>

					<S.BottomField>
						<Button color="#0BC4E2" disabledColor="#0bc5e279">Cadastrar</Button>
						<p>Já possuo uma conta. <a href="/login">Fazer login</a></p>
					</S.BottomField>
				</S.Form>
	
			</S.Section>
		</Background>
	);
};