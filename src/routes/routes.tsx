import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserProvider } from "../providers/UserProvider";

import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";

export const Router: React.FC = () => (
	<UserProvider>
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/sign-up" element={<SignUp />} />
		</Routes>
	</UserProvider>
);