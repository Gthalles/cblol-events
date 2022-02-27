import React, { createContext, useContext, useEffect, useState } from "react";
import { API } from "../services/api";

export const UserContext = createContext<Partial<any>>({ });

export const UserProvider: React.FC = ({ children }) => {
	/* TODO: Implementar IUser e IContext  */
	const [ user, setUser ] = useState<any>();

	const login = async (email: string, password: string) => {
		console.log("Login");
		try {
			await API.post("/login", { }, {
				headers: {
					Authorization: `Basic ${btoa(`${email}:${password}`)}`
				}
			});

			setUser({ email, password });
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		console.log("Logout");
		setUser({ });
	};

	useEffect(() => {
		console.log(user);
	}, [ user ]);
    
	return (
		<UserContext.Provider value={ { user, login, logout } }>
			{ children }
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);