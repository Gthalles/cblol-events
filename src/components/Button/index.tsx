import React from "react";
import * as S from "./styles";

export interface Props {
    color: string;
	disabledColor?: string;
	disable?: boolean;
}

const Button: React.FC<Props> = ({ color, disabledColor, disable, children }) => {
	return (
		<S.Button type="submit" color={ color } disabledColor={ disabledColor } disable={ disable }>
			{ children }
		</S.Button>
	);
};

export { Button };