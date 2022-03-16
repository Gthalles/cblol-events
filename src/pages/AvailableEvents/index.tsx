import React from "react";
import * as S from "./styles";
import { Dashboard } from "../../components/Dashboard";

export const AvailableEvents: React.FC = () => {
	return(
		<S.Main>
			<S.Aside>
				<Dashboard activeEvents />
			</S.Aside>

			<S.Section>
				<p>Events page works!</p>
			</S.Section>
		</S.Main>
	);
};