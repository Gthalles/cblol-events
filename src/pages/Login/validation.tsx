import * as yup from "yup";

const emailRegex = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;

export const schema = yup.object({
	email: yup.string().required("Email é obrigatório.").matches(emailRegex, "Email inválido."),
	password: yup.string().required("Senha é obrigatório.")
}).required();