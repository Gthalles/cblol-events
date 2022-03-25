import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Background } from "../../components/Background";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";
import backgroundImage from "../../assets/images/recovery-password.png";
import logo from "../../assets/images/logo.png";
import { schema } from "./validation";
import { IMessage } from "../../models/message";


export const RecoveryPassword: React.FC = () => {
	const [ disable, setDisable ] = useState<boolean>(false);
	const [ errorMessage, setErrorMessage ] = useState<IMessage>();

	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		if (errors.email) {
			setDisable(true);
		} else {
			setDisable(false);
		}
	}, [ errors?.email ]);
    
	return (
		<Background image={ backgroundImage }>
			<S.Section>
				<S.Title>Recuperar senha</S.Title>
				<S.Logo src={ logo } />
				<S.Text>
                    Insira abaixo o e-mail  da sua conta, enviaremos um código para que você possa recuperar sua senha
				</S.Text>
				<S.Form>
					<Field id="email" 
						register={ { ...register("email") } } 
						type="text" 
						placeholder="seu_email@exemplo.com" 
						label="E-mail" 
						errorMessage={ errors.email?.message }
						onInput={ () => setErrorMessage(undefined) }
					/>

					<Button color="#0BC4E2" disabledColor="#0bc5e279" disable={ disable }>Enviar código</Button>

					<p>Já possuo o código</p>
				</S.Form>

				<S.BottomContainer>
					<p>Já possui cadastro? <a href="/login">Fazer login</a></p>
					<p>Não possui uma conta? <a href="/sign-up">Cadastre-se</a></p>
				</S.BottomContainer>
			</S.Section>
		</Background>
	);
};