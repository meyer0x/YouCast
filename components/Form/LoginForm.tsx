import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../contexts/global/global.context";
import { InputComponent } from "./components/InputComponent";
import SubmitButton from "./components/SubmitButton";

export default function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const router = useRouter();
  const { login } = useGlobalContext();
  const [formError, setFormError] = useState(false);
  const [messageError, setMessageError] = useState(<></>);

  const onSubmit = (data): void => {
    login(data.email, data.password)
      .then(() => router.replace("/"))
      .catch((err) => {
        setFormError(err);
        setMessageError(
          <p className="mt-4 text-red-400">
            Invalid Credentials, veuillez reesayez.
          </p>
        );
      });
  };

  return (
    <form
      className="w-11/12 flex justify-center items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <InputComponent register={register("password", {required: true, minLength: 10})}/>*/}
      <InputComponent
        style="mb-7 mt-11"
        label="Entrez votre adresse email."
        type="text"
        uniqueID="LoginEmail"
        legend="Adresse email"
        register={register("email", {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Adresse email incorrect.",
          },
          required: {
            value: true,
            message: "Adresse email requise.",
          },
        })}
        error={errors.email}
      />
      <InputComponent
        style="mb-16"
        label="Entrez votre mot de passe"
        type="password"
        uniqueID="LoginPassword"
        legend="Mot de passe"
        register={register("password", {
          required: {
            value: true,
            message: "Mot de passe requis.",
          },
          minLength: {
            value: 8,
            message: "Le mot de passe doit contenir plus de 8 caractères.",
          },
        })}
        error={errors.password}
      />

      <SubmitButton text="Se connecter" style="" />
      {!errors.password && !errors.email ? (formError ? messageError : "") : ""}
    </form>
  );
}
