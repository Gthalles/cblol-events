import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "../src/routes/routes";
import GlobalStyle from "./styles/GlobalStyle";

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Router />
			<GlobalStyle />
		</BrowserRouter>
	);
};