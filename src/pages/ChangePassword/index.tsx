import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Background } from "../../components/Background";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";
import backgroundImage from "../../assets/images/change-password.png";
import logo from "../../assets/images/logo.png";
import { schema } from "../SignUp/validation";

export const ChangePassword: React.FC = () => {
	const [ disable, setDisable ] = useState<boolean>(false);
	const [ errorMessage, setErrorMessage ] = useState<string>();

	const { register, handleSubmit, formState: { errors }} = useForm({
		mode: "onChange",
		reValidateMode: "onBlur",
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		if (errors.password || errors.confirmPassword) {
			setDisable(true);
		} else {
			setDisable(false);
		}
	}, [ errors?.password, errors?.confirmPassword ]);

	return (
		<Background image={ backgroundImage }>
			<S.Section>
				<S.Title>Redefinir senha</S.Title>
				<S.Logo src={ logo } />
				<S.Form>
					<Field
						id="new-password"
						register={ { ...register("password") } }
						type="password"
						placeholder="Insira sua nova senha"
						label="Nova senha"
						errorMessage={ errors.password?.message }
						onInput={ () => setErrorMessage(undefined) }
					/>

					<Field
						id="confirmPassword"
						register={ { ...register("confirmPassword") } }
						type="password"
						placeholder="Repita sua nova senha"
						label="Confirmar nova senha"
						errorMessage={ errors.confirmPassword?.message }
						onInput={ () => setErrorMessage(undefined) }
					/>
					<Button color="#0BC4E2" disabledColor="#0bc5e279" disable={ disable }>Alterar senha</Button>
				</S.Form>

				<p>Gostaria de fazer login? <a href="/login">Clique aqui</a></p>
				<p>Não possui uma conta? <a href="/sign-up">Cadastre-se</a></p>
			</S.Section>
		</Background>
	);
};