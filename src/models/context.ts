import { IUser } from "./user";

export interface IContext {
    login: any;
    logout: () => void;
    user: IUser | null;
    loading: boolean;
}