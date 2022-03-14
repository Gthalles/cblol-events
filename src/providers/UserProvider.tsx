import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";

import { API } from "../services/api";
import { IUser } from "../models/user";
import { IContext } from "../models/context";


export const UserContext = createContext<Partial<IContext>>({ });

export const UserProvider: React.FC = ({ children }) => {
	const [ user, setUser ] = useState<IUser>();
	const [ loading, setLoading ] = useState<boolean>(true);
	const navigate = useNavigate();

	useEffect(() => {
		const recoveredUser = localStorage.getItem("user");

		if(recoveredUser) {
			setUser(JSON.parse(recoveredUser));
		} else {
			setUser(undefined);
		}

		console.log(user);

		setLoading(false);
	}, [ user?.id ]);

	const login =  useCallback(async (email: string, password: string) => {
		const response: AxiosResponse = await API.post("/login", { }, {
			headers: {
				Authorization: `Basic ${btoa(`${email}:${password}`)}`
			}
		});
		
		const loggedUser: IUser = jwtDecode(response.data.token);
		localStorage.setItem("user", JSON.stringify(loggedUser));
		localStorage.setItem("token", response.data.token);
		setUser({ ...loggedUser });

		navigate("/home");
	}, [ user?.id ]);

	const logout = useCallback(() => {
		API.get("/logout");

		localStorage.removeItem("user");
		setUser(undefined);
		navigate("/login");
	}, [ user?.id ]);
    
	return (
		<UserContext.Provider value={ { user, loading, login, logout } }>
			{ children }
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);