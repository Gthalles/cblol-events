import React from "react";
import { FieldValues } from "react-hook-form";
import * as S from "./styles";

interface IField {
    id: string;
    label: string;
    type: string;
    register?: FieldValues;
    placeholder?: string;
    defaultValue?: string;
    errorMessage?: string;
}

export function Field({ id, label, type, placeholder, register, defaultValue, errorMessage }: IField) {

	return (
		<S.Field>
			<S.Label htmlFor={ id }>{ label }</S.Label>
			<S.Input id={ id } { ...register } type={ type } placeholder={ placeholder } value={ defaultValue } />
			<S.ErrorMessage>{ errorMessage }</S.ErrorMessage>
		</S.Field>
	);
}