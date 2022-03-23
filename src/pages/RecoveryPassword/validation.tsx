import * as yup from "yup";
import { requiredErrorMessage, email } from "../SignUp/validation";

export const schema = yup.object({
	email: yup.string().required(requiredErrorMessage).matches(email.regex, "Email inválido."),
});