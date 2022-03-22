import React from "react";
import * as S from "./styles";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import backgroundImage from "../../assets/images/request-email-confirmation.png";
import logo from "../../assets/images/logo.png";

export const ConfirmEmailRequest: React.FC = () => {
	return (
		<Background image={ backgroundImage }>
			<S.Section>
				<S.Title>Confirmação de Email</S.Title>
				<S.Logo src={ logo } alt="CBLOL-Events logo" />
				<S.SuccessText>Parabéns, agora falta pouco!</S.SuccessText>
				<S.Text>
                    Enviamos um link de verificação para o e-mail informado no cadastro.
				</S.Text>
				<S.ButtonContainer>
					<Button redirectTo="/login" color="#0BC4E2">Fazer Login</Button>
				</S.ButtonContainer>
			</S.Section>
		</Background>
	);
};