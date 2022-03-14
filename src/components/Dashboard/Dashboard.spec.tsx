import React from "react"; 
import { render, screen } from "@testing-library/react";
import { Dashboard } from ".";

describe("Dashboard Component", () => {
	test("Images must be rendered", () => {
		render(<Dashboard  />);

		const imagesAlt = screen.getByAltText("CBLOL-Events logo");

		const eventsIcon = screen.getAllByAltText("Ícone de Eventos");
		
		const accountIcon = screen.getAllByAltText("Ícone de Perfil");

		const logoutIcon = screen.getAllByAltText("Ícone de Logout");

		const statisticIcon = screen.getAllByAltText("Ícone de Estatísticas");

		const newEventIcon = screen.getAllByAltText("Ícone de Novo Evento");

		const recepcionistIcon =  screen.getAllByAltText("Ícone de Recepcionistas");

		const newRecepcionistIcon = screen.getAllByAltText("Ícone de Novo Recepcionista");

		// const userDashboard = screen.getByTitle("user-dashboard");

		// const recepcionistDashboard = screen.getByTitle("recepcionist-dashboard");

		expect([ imagesAlt, eventsIcon, accountIcon, logoutIcon, statisticIcon, newEventIcon, recepcionistIcon, newRecepcionistIcon ]).toBeInTheDocument;
	});

	test("Title and classes must be in the document", () => {
		render(<Dashboard />);
		// const userDashboard = screen.getByTitle("user-dashboard");

		// const recepcionistDashboard = screen.getByTitle("recepcionist-dashboard");

		const adminDashboard = screen.getByTitle("admin-dashboard");

		expect(adminDashboard).toBeInTheDocument;
	});
});