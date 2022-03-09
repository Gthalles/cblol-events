import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FieldValues } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { ErrorMessage } from "../ErrorMessage";

interface IField {
    id: string;
    label: string;
    type: string;
    register?: FieldValues;
    onInput?: () => Event | void;
    placeholder?: string;
    errorMessage?: string;
	mask?: string;
}

export function Field({ id, label, type, placeholder, register, errorMessage, onInput, mask = "" }: IField) {
	
	const maskedInput = <ReactInputMask id={ id } { ...register } type={ type } placeholder={ placeholder } onInput={ onInput } mask={ mask }  />;

	const normalInput = <S.Input id={ id } { ...register } type={ type } placeholder={ placeholder } onInput={ onInput } />;

	const [ input, setInput ] = useState(normalInput);
	
	const handleInput = () => {
		return mask.length > 0 ? setInput(maskedInput) : setInput(normalInput);
	};

	useEffect(() => {
		handleInput();
	}, [ mask.length !== 0 ]);
	
	return (

		<S.Field>
			<S.Label htmlFor={ id }>{ label }</S.Label>

			{ input }

			<ErrorMessage text={ errorMessage } />
		</S.Field>
	);
}