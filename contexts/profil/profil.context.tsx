import { useContext } from "react";
import { createContext } from "react";
import { SubState } from "../../enums/subState.enum";
import { getUserInfoWithToken } from "../../networks/profil.network";

export interface IUserInfo {
  id: number;
  first_name: string;
  name: string;
  country: string;
  email: string;
  password: string;
}

interface IProfilContextProps {
  subState: SubState;
  userInfo?: IUserInfo;
}

export const profilContext = createContext<IProfilContextProps>({
  subState: SubState.FREE,
  userInfo: null,
});

export const useProfilContext = (): IProfilContextProps =>
  useContext(profilContext);
