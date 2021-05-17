/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { ContentProvider } from "../contexts/content/content.provider";
import { useGlobalContext } from "../contexts/global/global.context";
import {
  GlobalProvider,
  ProtectRoute,
} from "../contexts/global/global.provider";
import { ProfilProvider } from "../contexts/profil/profil.provider";
import "../styles/globals.css";
import { getCredentialStorage } from "../utils/credentielStorage";

export default function _App({ Component, pageProps }): JSX.Element {
  return (
    <GlobalProvider>
      <ProfilProvider>
        {/* <ProtectRoute> */}
        <Component {...pageProps} />
        {/* </ProtectRoute> */}
      </ProfilProvider>
    </GlobalProvider>
  );
}
