import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../contexts/global/global.context";
import { InputComponent } from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";
import SubmitButton from "./components/SubmitButton";

export default function RegisterForm(): JSX.Element {
  const listOption = [
    ["France", "FR"],
    ["Ang", "AN"],
    ["MIchel", "MI"],
  ];

  const { register, handleSubmit, formState, watch } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;
  const router = useRouter();
  function checkIfRegisterSuccess(registerError): void {
    if (registerError.field === "email") console.log(registerError);
  }
  async function checkEmailExists(email): Promise<boolean> {
    const req = await fetch("http://127.0.0.1:3333/users/email/" + email).then(
      (r) => {
        if (r.status === 200) return true;
        else {
          return false;
        }
      }
    );
    return await req;
  }
  const { register: registerContext } = useGlobalContext();

  const onSubmit = (data): void => {
    registerContext(data)
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="w-11/12 flex justify-center items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <InputComponent register={register("password", {required: true, minLength: 10})}/>*/}
      <InputComponent
        style="mb-5 "
        label="Entrez votre prénom"
        type="text"
        uniqueID="RegisterFirstName"
        legend="Prénom"
        register={register("firstName", {
          required: {
            value: true,
            message: "Prénom requis.",
          },
          minLength: {
            value: 3,
            message: "Prénom incorrect.",
          },
        })}
        error={errors.firstName}
      />
      <InputComponent
        style="mb-5"
        label="Entrez votre nom"
        type="text"
        uniqueID="RegisterName"
        legend="Nom"
        register={register("name", {
          required: {
            value: true,
            message: "Nom requis.",
          },
          minLength: {
            value: 3,
            message: "Nom incorrect.",
          },
        })}
        error={errors.name}
      />
      <SelectComponent
        listOption={listOption}
        defaultOption="Choisir un pays"
        legend="Pays"
        register={register("country", {
          required: {
            value: true,
            message: "Pays requis.",
          },
          validate: (country) =>
            listOption.some((row) => row.includes(country)) || "Pays incorrect",
        })}
        style="mb-5"
        error={errors.country}
      />
      <InputComponent
        style="mb-5"
        label="Entrez votre adresse email"
        type="text"
        uniqueID="RegisterEmail"
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
          validate: async (email) =>
            !(await checkEmailExists(email)) || "Adresse email déjà prise.",
        })}
        error={errors.email}
        customErrors={!errors.email}
        messageValidation="Adresse email disponible ! "
      />
      <InputComponent
        style="mb-5"
        label="Entrez votre mot de passe"
        type="password"
        uniqueID="RegisterPassword"
        legend="Mot de passe"
        register={register("password", {
          required: {
            value: true,
            message: "Mot de passe requis.",
          },
          minLength: {
            value: 8,
            message: "Mot de passe incorrect.",
          },
        })}
        error={errors.password}
      />
      <InputComponent
        style="mb-10 "
        label="Confirmez votre mot de passe"
        type="password"
        uniqueID="RegisterPasswordConfirm"
        legend="Mot de passe"
        register={register("passwordConfirmation", {
          required: {
            value: true,
            message: "Mot de passe requis.",
          },
          validate: (value) =>
            value === watch("password") ||
            "Les mots de passes ne sont pas identiques.",
        })}
        error={errors.passwordConfirmation}
      />
      <SubmitButton text="Crée un compte" style="" />
    </form>
  );
}
