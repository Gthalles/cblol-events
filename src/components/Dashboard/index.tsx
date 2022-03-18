import React, { JSXElementConstructor, useEffect, useState } from "react";
import * as S from "./styles";
import { useUserContext } from "../../providers/UserProvider";

import logo from "../../assets/icons/dashboard-logo.svg";
import eventsIcon from "../../assets/icons/events-icon.svg";
import myEventsIcon from "../../assets/icons/my-events-icon.svg";
import accountIcon from "../../assets/icons/account-icon.svg";
import logoutIcon from "../../assets/icons/logout-icon.svg";
import addRecepcionistIcon from  "../../assets/icons/add-recepcionist-icon.svg";
import recepcionistIcon from  "../../assets/icons/recepcionists-icon.svg";
import newEventIcon from "../../assets/icons/new-event-icon.svg";
import statisticIcon from "../../assets/icons/statistic-icon.svg";

import activeEventsIcon from "../../assets/icons/activated-icons/active-events-icon.svg";
import activeMyEventsIcon from "../../assets/icons/activated-icons/active-my-events-icon.svg";
import activeAccountIcon from "../../assets/icons/activated-icons/active-account-icon.svg";
import activeLogoutIcon from "../../assets/icons/activated-icons/active-logout-icon.svg";
import activeAddRecepcionistIcon from  "../../assets/icons/activated-icons/active-add-recepcionist-icon.svg";
import activeRecepcionistIcon from  "../../assets/icons/activated-icons/active-recepcionists-icon.svg";
import activeNewEventIcon from "../../assets/icons/activated-icons/active-new-event-icon.svg";
import activeStatisticIcon from "../../assets/icons/activated-icons/active-statistic-icon.svg";

interface Props {
	activeEvents?: boolean;
	activeMyEvents?: boolean;
	activeAccount?: boolean;
	activeLogout?: boolean;
	activeAddRecepcionist?: boolean;
	activeRecepcionist?: boolean;
	activeNewEvent?: boolean;
	activeStatistic?: boolean;
}



export const Dashboard: React.FC<Props> = ({activeEvents, activeMyEvents, activeAccount, activeLogout, activeAddRecepcionist, activeRecepcionist, activeNewEvent, activeStatistic }: Props) => {

	const { user, logout } = useUserContext();

	const [ dashboard, setDashboard ] = useState<any>();

	const userDashboard = (
		<S.Menu title="user-dashboard">
			<S.MenuItem>
				<S.ItemLink href="/available-events">
					<S.Icon src={ activeEvents ? eventsIcon : activeEventsIcon } alt="Ícone de Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/events/user">
					<S.Icon src={ myEventsIcon } alt="Ícone de Meus Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/home">
					<S.Icon src={ accountIcon } alt="Ícone de Perfil" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/" onClick={ logout }>
					<S.Icon src={ logoutIcon } alt="Ícone de Logout" />
				</S.ItemLink>
			</S.MenuItem>
		</S.Menu>
	);

	const recepcionistDashboard = (
		<S.Menu title="recepcionist-dashboard">
			<S.MenuItem>
				<S.ItemLink href="/available-events">
					<S.Icon src={ activeEvents ? eventsIcon : activeEventsIcon } alt="Ícone de Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/events/user">
					<S.Icon src={ myEventsIcon } alt="Ícone de Meus Eventos" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/home">
					<S.Icon src={ accountIcon } alt="Ícone de Perfil" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/" onClick={ logout }>
					<S.Icon src={ logoutIcon } alt="Ícone de Logout" />
				</S.ItemLink>
			</S.MenuItem>
		</S.Menu>
	);

	const adminDashboard = (
		<S.Menu title="admin-dashboard">
			<S.MenuItem>
				<S.ItemLink href="/statistics">
					<S.Icon src={  statisticIcon } alt="Ícone de Estatísticas" />
				</S.ItemLink>
			</S.MenuItem>

			<S.MenuItem>
				<S.ItemLink href="/available-events">
					<S.Icon src={ activeEvents ? activeEventsIcon : eventsIcon } alt="Ícone de Eventos" />
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
				<S.ItemLink href="/" onClick={ logout }>
					<S.Icon src={ logoutIcon } alt="Ícone de Logout" />
				</S.ItemLink>
			</S.MenuItem>
		</S.Menu>
	);

	useEffect(() => {
		switch (user?.type) {
		case 1:
			setDashboard(userDashboard);
			break;
				
		case 2:
			setDashboard(recepcionistDashboard);
			break;
		
		case 4:
			setDashboard(adminDashboard);
			break;
				
		}

	}, [ user?.id ]);

	return (
		<S.Nav className="menu-navigation">
			<S.ItemLink href="/home">
				<S.Logo src={ logo } alt="CBLOL-Events logo" />
			</S.ItemLink>
			{ dashboard }
		</S.Nav>
	);
};