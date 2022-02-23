import React, { ReactNode } from "react";
import * as S from "./styles";

export interface BackgroundProperties {
    image: string;
    children: ReactNode
}

function Background ({ image, children }: BackgroundProperties) {
	return (
		<div className="container">
			<S.Image image={ image }>
				{children}
			</S.Image>
		</div>
	); 
}

export { Background };