import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { SubState } from "../../enums/subState.enum";
import {
  getUserInfoWithToken,
  setAllInfo,
} from "../../networks/profil.network";
import { getCredentialStorage } from "../../utils/credentielStorage";
import { IUserInfo, profilContext } from "./profil.context";

interface IProfilState {
  subState: SubState;
  userInfo?: IUserInfo;
}
interface IProfilProviderProps {
  children: ReactNode;
}
export function ProfilProvider(props: IProfilProviderProps): JSX.Element {
  const [profilState, setProfilState] = useState<IProfilState>({
    subState: SubState.FREE,
    userInfo: {
      id: 0,
      first_name: "",
      name: "",
      country: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const token = getCredentialStorage();

    console.log("use effect en cours..");

    getUserInfoWithToken(token)
      .then((data) =>
        setProfilState({
          // TODO: GET THE REAL SUBSTATE
          ...profilState,
          ...{
            subState: SubState.FREE,
            userInfo: {
              id: data.id,
              first_name: data.first_name,
              name: data.name,
              country: data.country,
              email: data.email,
              password: data.password,
            },
          },
        })
      )
      .catch((err) => console.log(err));
  }, [props.children]);

  const setInfo = async (
    firstName: string,
    name: string,
    email: string
  ): Promise<boolean> => {
    const token = getCredentialStorage();
    return new Promise((resolve, reject) => {
      setAllInfo({ email, first_name: firstName, name, token })
        .then((data) => {
          getUserInfoWithToken(token);
          resolve(true);
        })
        .catch(() => reject(true));
    });
  };

  return (
    <profilContext.Provider
      value={{
        subState: profilState.subState,
        userInfo: profilState.userInfo,
        setInfo,
      }}
    >
      {props.children}
    </profilContext.Provider>
  );
}
