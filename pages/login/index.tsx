import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import TopContentLoginPage from "../../components/Form/components/TopContentLoginPage";
import LoginForm from "../../components/Form/LoginForm";
import Layout from "../../components/Layout";
import LogoYouCast from "../../components/LogoYouCast";
import { useGlobalContext } from "../../contexts/global/global.context";
import { AuthState } from "../../enums/authState.enum";
import { getCredentialStorage } from "../../utils/credentielStorage";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   getCredentialStorage();
//   // Get the user's session based on the request
//   const cookies = ctx.req.headers.cookie.split("credential=")[1];
//   if (cookies === undefined || cookies == null || cookies == undefined) {
//     return {
//       props: {
//         cookie: cookies || null,
//       },
//     };
//   } else {
//     ctx.res.writeHead(307, { Location: "/" });
//     ctx.res.end();
//   }
// };
export default function Index(props): JSX.Element {
  const { authState, autoLoginChecked } = useGlobalContext();
  // console.log(authState);
  // if (authState === AuthState.CONNECTED && autoLoginChecked) {
  //   return <div>{"Vous êtes déjà connecté. Cookies : " + props.cookie}</div>;
  // }
  return (
    <div className="h-screen flex justify-center items-center bg-youcast-bg flex-col">
      <Layout title="YouCast - Connexion" />
      <LogoYouCast
        style="-mt-16 mb-20 cursor-pointer"
        width={274}
        height={96}
      />
      <TopContentLoginPage
        style="mb-2"
        firstText="Connexion via réseaux sociaux : "
      />
      <LoginForm />
      <Separator text="Vous n'avez pas encore de compte ?" />
      <Button
        text="Crée un compte"
        style="mb-8"
        isTransparent
        link="/register"
      />
    </div>
  );
}

export const Separator = ({ text }: { text: string }): JSX.Element => {
  return <div className="text-divider mt-4 mb-4">{text}</div>;
};
