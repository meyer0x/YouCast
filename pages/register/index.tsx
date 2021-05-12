import React from "react";
import Button from "../../components/Button";
import TopContentLoginPage from "../../components/Form/components/TopContentLoginPage";
import RegisterForm from "../../components/Form/RegisterForm";
import Layout from "../../components/Layout";
import LogoYouCast from "../../components/LogoYouCast";
import { Separator } from "../Login";

export default function Index(): JSX.Element {
  return (
    <div className="h-screen flex justify-center items-center bg-youcast-bg flex-col">
      <Layout title="YouCast - Inscription" />
      <LogoYouCast style="cursor-pointer mb-6" width={274} height={96} />

      <TopContentLoginPage
        style="mb-1"
        firstText="Inscription via les réseaux sociaux : "
      />
      <Separator text="OU" />
      <RegisterForm />
      <Separator text="Vous avez déjà un compte ?" />
      <Button text="Se connecter" style="mb-8" isTransparent link="/login" />
    </div>
  );
}
