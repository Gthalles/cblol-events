import React from "react";
import * as S from "./styles";

interface Props {
	text: string | undefined;
}

export const ErrorMessage: React.FC<Props> = ({ text }) => {
	return <S.Text>{ text }</S.Text>;
};