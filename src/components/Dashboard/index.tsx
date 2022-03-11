import React from "react";
import * as S from "./styles";

import logo from "../../assets/images/logo.png";
import eventsIcon from "../../assets/icons/events-icon.png";
import myEventsIcon from "../../assets/icons/my-events-icon.png";
import accountIcon from "../../assets/icons/account-icon.png";
import logoutIcon from "../../assets/icons/logout-icon.png";

import addRecepcionistIcon from  "../../assets/icons/add-recepcionist-icon.png";
import recepcionistIcon from  "../../assets/icons/recepcionists-icon.png";
import newEventIcon from "../../assets/icons/new-event-icon.png";
import statisticIcon from "../../assets/icons/statistic-icon.png";



export const Dashboard: React.FC = () => {
	const userDashboard = (
		<S.Menu className="user-dashboard">
			<S.MenuItem>
				<S.ItemLink href="/available-events">
					<S.Icon src={ eventsIcon } alt="Ícone de Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/events/user">
					<S.Icon src={ myEventsIcon } alt="Ícone de meus Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/home">
					<S.Icon src={ accountIcon } alt="Ícone de Perfil" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/logout">
					<S.Icon src={ logoutIcon } alt="Ícone de Logout" />
				</S.ItemLink>
			</S.MenuItem>
		</S.Menu>
	);

	const recepcionistDashboard = (
		<S.Menu className="recepcionist-dashboard">
			<S.MenuItem>
				<S.ItemLink href="/available-events">
					<S.Icon src={ eventsIcon } alt="Ícone de Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/events/recepcionist">
					<S.Icon src={ myEventsIcon } alt="Ícone de meus Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/home">
					<S.Icon src={ accountIcon } alt="Ícone de Perfil" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/logout">
					<S.Icon src={ logoutIcon } alt="Ícone de Logout" />
				</S.ItemLink>
			</S.MenuItem>
		</S.Menu>
	);

	const adminDashboard = (
		<S.Menu className="admin-dashboard">
			<S.MenuItem>
				<S.ItemLink href="/statistics">
					<S.Icon src={  statisticIcon } alt="Ícone de estatísticas" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/available-events">
					<S.Icon src={ eventsIcon } alt="Ícone de Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/new-event">
					<S.Icon src={ newEventIcon } alt="Ícone de Novo Evento" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/recepcionists">
					<S.Icon src={ recepcionistIcon } alt="Ícone de Recepcionistas" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem> 
				<S.ItemLink href="/new-recepcionist">
					<S.Icon src={ addRecepcionistIcon } alt="Ícone de Novo Recepcionista" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/home">
					<S.Icon src={ accountIcon } alt="Ícone de Perfil" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/logout">
					<S.Icon src={ logoutIcon } alt="Ícone de Logout" />
				</S.ItemLink>
			</S.MenuItem>
		</S.Menu>
	);


	return (
		<S.Nav className="menu-navigation">
			<S.ItemLink href="">
				<S.Logo src={ logo } alt="CBLOL-Events logo" />
			</S.ItemLink>
			{ adminDashboard }
		</S.Nav>
	);
};