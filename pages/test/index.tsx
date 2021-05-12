/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextPageContext } from "next";
import React from "react";
import { getCredentialStorage } from "../../utils/credentielStorage";

function Page(props) {
  return <p>hello {props.cookie}</p>;
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const cookie = getCredentialStorage();
  if (!cookie) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  // Pass data to the page via props
  return { props: { cookie } };
}

export default Page;
