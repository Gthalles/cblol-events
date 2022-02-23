import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";

const Router = () => (
	<Routes>
		<Route path="/" element={<Navigate to="/sign-up" />} />
		<Route path="/login" element={<Login />} />
		<Route path="/sign-up" element={<SignUp />} />
	</Routes>
);

export default Router;