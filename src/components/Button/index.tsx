import React from "react";
import * as S from "./styles";

export interface Props {
    color: string;
	disabledColor?: string;
	disable?: boolean;
	redirectTo?: string;
}

const Button: React.FC<Props> = ({ color, disabledColor, disable, redirectTo, children }) => {
	return (
		<S.ButtonLink href={ redirectTo }>
			<S.Button type="submit" color={ color } disabledColor={ disabledColor } disable={ disable }>
				{ children }
			</S.Button>
		</S.ButtonLink>
	);
};

export { Button };