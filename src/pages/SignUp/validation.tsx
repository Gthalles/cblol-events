import * as yup from "yup";

const requiredErrorMessage = "Campo obrigatório.";

const minLengthMessage = (minLength: number) => {
	return `Mínimo de ${minLength} caracteres.`;
};

const maxLengthMessage = (maxLength: number) => {
	return `Máximo de ${maxLength} caracteres.`;
};

const name = {
	name: "Nome",
	minLength: 3,
	maxLength: 80,
};

const email = {
	name: "Email",
	regex: /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/
};

const cpf = {
	name: "CPF",
	minLength: 14,
	maxLength: 14,
	regex: /\d{3}\d{3}\d{3}\d{2}$/
};

const cnpj = {
	name: "CNPJ",
	regex: /^\d{2}\.\d{3}\.\d{3}\/000[1|2]-\d{2}$|\d{14}/
};

const password = {
	name: "password",
	minLength: 6,
	maxLength: 22,
	regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?^.,;?><:{}[\]])[\w!@#$%&*()+\-.,;?^.,;?><:{}[\]]{6,22}$/
};

export const schema = yup.object({
	fullname: yup.string().required(requiredErrorMessage).min(name.minLength, minLengthMessage(name.minLength)).max(name.maxLength, maxLengthMessage(name.maxLength)),
	email: yup.string().required(requiredErrorMessage).matches(email.regex, "Email inválido."),
	document: yup.string().required(requiredErrorMessage).min(cpf.minLength, minLengthMessage(cpf.minLength)).max(cpf.maxLength, maxLengthMessage(cpf.maxLength)),
	birthDate: yup.string().required(requiredErrorMessage),
	password: yup.string().required(requiredErrorMessage).min(password.minLength, minLengthMessage(password.minLength)).max(password.maxLength, maxLengthMessage(password.maxLength)).matches(password.regex, "Senha inválida."),
	confirmPassword: yup.string().oneOf([yup.ref("password")], "Senhas não correspondem.").required(requiredErrorMessage),
}).required();