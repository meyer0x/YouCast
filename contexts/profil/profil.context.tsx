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
  setInfo: (
    first_name: string,
    name: string,
    email: string
  ) => Promise<boolean>;
}

export const profilContext = createContext<IProfilContextProps>({
  subState: SubState.FREE,
  userInfo: null,
  setInfo: () => Promise.reject(),
});

export const useProfilContext = (): IProfilContextProps =>
  useContext(profilContext);
