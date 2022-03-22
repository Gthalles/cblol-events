import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserProvider, useUserContext } from "../providers/UserProvider";


import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { ConfirmEmailRequest } from "../pages/ConfirmEmailRequest";
import { ConfirmEmailSuccess } from "../pages/ConfirmEmailSuccess";
import { ConfirmEmailFailed } from "../pages/ConfirmEmailFailed";
import { AvailableEvents } from "../pages/AvailableEvents";
import { Home } from "../pages/Home";

const Public = ({ children }: any) => {
	const { user } = useUserContext();

	if (user) {
		return <Navigate to="/home" />;
	}

	return children;
};

const Private = ({ children }: any) => {
	const { user, loading } = useUserContext();

	if (loading) {
		return <div>Carregando...</div>;
	}
  
	if (!user) {
		return <Navigate to="/" />;
	}
	
	return children;
};

export const Router: React.FC = () => (
	
	<UserProvider>
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />

			<Route path="/sign-up" element={
				<Public>
					<SignUp />
				</Public>
			} />

			<Route path="/request-email-confirmation" element={
				<Public>
					<ConfirmEmailRequest />
				</Public>
			} />

			<Route path="/successful-email-confirmation" element={
				<Public>
					<ConfirmEmailSuccess />
				</Public>
			} />

			<Route path="/failed-email-confirmation" element={
				<Public>
					<ConfirmEmailFailed />
				</Public>
			} />
			
			<Route path="/login" element={
				<Public>
					<Login />
				</Public>
			} />

			<Route path="/home" element={ 
				<Private>
					<Home />
				</Private> 
			} />

			<Route path="/available-events" element={<AvailableEvents />} />

		</Routes>
	</UserProvider>
);