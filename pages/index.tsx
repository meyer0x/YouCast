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

export default function Home({ data }): JSX.Element {
  return <MainApp data={data} />;
}

function MainApp({ data }): JSX.Element {
  console.log(typeof data);
  const [state, setState] = useState(<h1>ACCUEIL</h1>);

  function showComponent(componentToAdd: JSX.Element): void {
    setState(componentToAdd);
  }

  return (
    <div className="h-screen bg-youcast-bg w-screen overflow-hidden flex flex-row">
      <Layout title="YouCast - Accueil" />
      <SideBar setComponent={showComponent} currentComponent={state}>
        <PlayerBar tracks={data}>{state}</PlayerBar>
      </SideBar>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:3333/podcast/all`);
  const data = await res.json();
  console.log(data);
  return { props: { data } };
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
