import React, { ReactNode } from "react";
import * as S from "./styles";

export interface BackgroundProperties {
    image: string;
    children: ReactNode
}

function Background ({ image, children }: BackgroundProperties) {
	return (
		<S.Image image={ image }>
			{ children }
		</S.Image>
	); 
}

export { Background };