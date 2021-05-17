/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextPageContext } from "next";
import React from "react";
import { ISideBarProps } from "../../components/Section/SideBar";
import { getAllPodcast } from "../../networks/podcast.network";
import { getCredentialStorage } from "../../utils/credentielStorage";

export default function Page(props: ISideBarProps) {
  console.log(props.data[0]);
  return <div>{}</div>;
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:3333/podcast/all`);
  const data = await res.json();
  console.log(data);
  return { props: { data } };
}
