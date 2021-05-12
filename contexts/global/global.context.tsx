import { useContext } from "react";
import { createContext } from "react";
import { AuthState } from "../../enums/authState.enum";

export interface IRegisterPayload {
  firstName: string;
  name: string;
  country: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface IGlobalContextProps {
  authState: AuthState;
  firstRenderingAuthentication: boolean;
  autoLoginChecked: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (payload: IRegisterPayload) => Promise<boolean>;
}

export const globalContext = createContext<IGlobalContextProps>({
  authState: AuthState.OFFLINE,
  firstRenderingAuthentication: false,
  autoLoginChecked: false,
  login: () => Promise.reject(),
  logout: () => Promise.reject(),
  register: () => Promise.reject(),
});

export const useGlobalContext = (): IGlobalContextProps =>
  useContext(globalContext);
