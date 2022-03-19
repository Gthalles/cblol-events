import React from "react";
import { Background } from "../../components/Background";
import * as S from "./styles";

import backgroundImage from "../../assets/images/failed-email-confirmation.png";
import logo from "../../assets/images/logo.png";
import { Button } from "../../components/Button";

export const ConfirmEmailFailed: React.FC = () => {
	return (
		<Background image={ backgroundImage }>
			<S.Section>
				<S.Title>Confirmação de Email</S.Title>
				<S.Logo src={ logo } alt="CBLOL-Events logo" />
				<S.FailedText>Não foi possível confirmar o seu email!</S.FailedText>
				<S.Text>
                    Este email já foi confirmado anteriormente. Você pode fazer login com seu e-mail e senha clicando no botão abaixo
				</S.Text>
				<S.ButtonContainer>
					<Button color="#0BC4E2">Fazer login</Button>
				</S.ButtonContainer>
			</S.Section>
		</Background>
	);
};