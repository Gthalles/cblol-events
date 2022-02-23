import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../src/routes/routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	return (
		<BrowserRouter>
			<Router />
			<GlobalStyle />
		</BrowserRouter>
	);
}

export default App;