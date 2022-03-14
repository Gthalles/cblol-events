import React from "react"; 
import { render, screen } from "@testing-library/react";
import { Dashboard } from ".";

describe("Dashboard Component", () => {
	test("Images must be rendered", () => {
		render(<Dashboard />);

		const imagesAlt = screen.getByAltText("CBLOL-Events logo");

		const eventsIcon = screen.getAllByAltText("Ícone de Eventos");

		const myEventsIcon = screen.getAllByAltText("Ícone de meus Eventos");

		const accountIcon = screen.getAllByAltText("Ícone de Perfil");

		const logoutIcon = screen.getAllByAltText("Ícone de Logout");

        

		expect([imagesAlt, eventsIcon, myEventsIcon, accountIcon, logoutIcon]).toBeInTheDocument;
	});

});