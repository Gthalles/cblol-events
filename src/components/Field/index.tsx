import React from "react";
import { FieldValues } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import * as S from "./styles";

interface IField {
    id: string;
    label: string;
    type: string;
    register?: FieldValues;
    onInput?: () => any;
    placeholder?: string;
    errorMessage?: string;
}

export function Field({ id, label, type, placeholder, register, errorMessage, onInput }: IField) {

	return (
		<S.Field>
			<S.Label htmlFor={ id }>{ label }</S.Label>

			<S.Input id={ id }
				{ ...register }
				type={ type }
				placeholder={ placeholder }
				onInput={ onInput }
			/>

			<ErrorMessage text={ errorMessage } />
		</S.Field>
	);
}