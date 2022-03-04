import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserProvider, useUserContext } from "../providers/UserProvider";


import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";

const Public = ({ children }: any) => {
	const { user } = useUserContext();

	if (user) {
		return <Navigate to="/profile" />;
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
			<Route path="/login" element={<Login />} />
			<Route path="/sign-up" element={
				<Public>
					<SignUp />
				</Public>
			} />

			<Route path="/profile" element={ 
				<Private>
					<SignUp />
				</Private> 
			} />
		</Routes>
	</UserProvider>
);