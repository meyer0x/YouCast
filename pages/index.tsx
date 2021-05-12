import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import PlayerBar from "../components/Section/PlayerBar";
import ProfilManagement from "../components/Section/ProfilManagement";
import SideBar from "../components/Section/SideBar";
import { useGlobalContext } from "../contexts/global/global.context";
import { AuthState } from "../enums/authState.enum";
import { getCredentialStorage } from "../utils/credentielStorage";

export default function Home(): JSX.Element {
  return <MainApp />;
}

function MainApp(): JSX.Element {
  const [state, setState] = useState(<h1>ACCUEIL</h1>);
  useEffect(() => {
    console.log(state);
  }, [state]);
  function showComponent(componentToAdd: JSX.Element): void {
    setState(componentToAdd);
  }

  return (
    <div className="h-screen bg-youcast-bg w-screen overflow-hidden flex flex-row">
      <Layout title="YouCast - Accueil" />
      <SideBar setComponent={showComponent} currentComponent={state}>
        <PlayerBar>{state}</PlayerBar>
      </SideBar>
    </div>
  );
}

// export async function getServerSideProps(): Promise<unknown> {
//   // Fetch data from external API
//   const cookie = getCredentialStorage();

//   if (cookie === undefined) {
//     return {
//       redirect: { destination: "/login", permanent: false },
//     };
//   }
//   // Pass data to the page via props
//   return { props: { cookie } };
// }
