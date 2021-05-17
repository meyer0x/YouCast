/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { AuthState } from "../../enums/authState.enum";
import { authLogin, authRegister } from "../../networks/authentication.network";
import MainPage from "../../pages/index";
import LoginPage from "../../pages/login/index";
import {
  deleteCredentialStorage,
  getCredentialStorage,
  setCredentialStorage,
} from "../../utils/credentielStorage";
import {
  IRegisterPayload,
  globalContext,
  useGlobalContext,
} from "./global.context";

export interface IGlobalProviderProps {
  children: ReactNode;
}

interface IGlobalState {
  authState: AuthState;
  firstRenderingAuthentication: boolean;
  autoLoginChecked: boolean;
}

export function GlobalProvider(props: IGlobalProviderProps): JSX.Element {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    authState: AuthState.OFFLINE,
    firstRenderingAuthentication: false,
    autoLoginChecked: false,
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      authLogin({ email, password })
        .then((data: any) => {
          setCredentialStorage(data.token);
          setGlobalState({
            ...globalState,
            ...{
              authState: AuthState.CONNECTED,
              firstRenderingAuthentication: true,
            },
          });
          resolve(true);
        })
        .catch((err) => reject(true));
    });
  };

  const logout = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      deleteCredentialStorage();
      setGlobalState({
        ...globalState,
        ...{
          authState: AuthState.OFFLINE,
          firstRenderingAuthentication: false,
        },
      });
      resolve(true);
    });
  };

  const register = async (payload: IRegisterPayload): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      authRegister(payload)
        .then((data) => {
          setCredentialStorage(data.token);
          setGlobalState({
            ...globalState,
            ...{
              authState: AuthState.CONNECTED,
              firstRenderingAuthentication: true,
            },
          });
          resolve(true);
        })
        .catch(() => reject(true));
    });
  };

  useEffect(() => {
    const token = getCredentialStorage();
    // TODO: CHECK SESSION
    token
      ? setGlobalState({
          ...globalState,
          ...{
            authState: AuthState.CONNECTED,
            firstRenderingAuthentication: true,
            autoLoginChecked: true,
          },
        })
      : setGlobalState({
          ...globalState,
          ...{ autoLoginChecked: true },
        });
  }, []);

  return (
    <globalContext.Provider
      value={{
        authState: globalState.authState,
        firstRenderingAuthentication: globalState.firstRenderingAuthentication,
        autoLoginChecked: globalState.autoLoginChecked,
        login,
        logout,
        register,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}

// export const ProtectRoute = ({ children }) => {
//   const router = useRouter();
//   const [currentPath, setCurrentPath] = React.useState("");
//   React.useEffect(() => setCurrentPath(router.pathname), [router.pathname]);
//   const { authState, autoLoginChecked } = useGlobalContext();
//   const isLoggedIn = authState === AuthState.CONNECTED;

//   if (
//     !isLoggedIn &&
//     autoLoginChecked &&
//     currentPath !== "/register" &&
//     currentPath !== "/login"
//   ) {
//     router.push("/login");
//     return;
//   }

//   if (
//     isLoggedIn &&
//     autoLoginChecked &&
//     (currentPath === "/login" || currentPath === "/register")
//   ) {
//     router.push("/");
//     return;
//   }

//   return children;
// };
