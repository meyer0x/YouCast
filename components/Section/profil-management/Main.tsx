import React, { ReactNode } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProfilContext } from "../../../contexts/profil/profil.context";
import { ISideBarProps } from "../SideBar";

export default function Main(): JSX.Element {
  const { userInfo, setState, setInfo } = useProfilContext();
  const { register, handleSubmit, formState, watch } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: userInfo.first_name,
      name: userInfo.name,
      email: userInfo.email,
    },
  });
  const [validate, setValidate] = useState(false);
  const onSubmit = (data): void => {
    if (
      userInfo.email === data.email &&
      userInfo.name === data.name &&
      userInfo.first_name === data.firstName
    ) {
      return;
    }
    setInfo(data.firstName, data.name, data.email)
      .then((data) => setValidate(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setValidate(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [validate]);
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
  return (
    <div className="w-2/3 flex items-start justify-start h-full flex-col p-20 px-32">
      <p className="text-youcast-white text-2xl">Modifier mes informations</p>
      <div className="h-0.5 bg-youcast-hover w-full mt-8 mb-6"></div>
      <p className="text-youcast-white text-sm tracking-wide font-light">
        Informations personnelles
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <div className="mt-4 w-full">
              <label
                htmlFor=""
                className="text-youcast-white font-light tracking-wide text-xs ml-1"
              >
                Prénom
              </label>
              <input
                {...register("firstName", {
                  minLength: {
                    value: 3,
                    message: "Prénom incorrect.",
                  },
                })}
                autoComplete="off"
                type="text"
                placeholder="Prénom"
                className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
              />
              <div className="w-100 text-right mt-1 font-light text-xs ">
                {formState.errors.firstName ? (
                  <span className="text-red-400">
                    {formState.errors.firstName.message}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mt-4 ml-8 w-full">
              <label
                htmlFor=""
                className="text-youcast-white font-light tracking-wide text-xs ml-1"
              >
                Nom
              </label>
              <input
                {...register("name", {
                  minLength: {
                    value: 3,
                    message: "Nom incorrect.",
                  },
                })}
                autoComplete="off"
                type="text"
                placeholder="Nom"
                className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
              />
              <div className="w-100 text-right mt-1 font-light text-xs ">
                {formState.errors.name ? (
                  <span className="text-red-400">
                    {formState.errors.name.message}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <label
              htmlFor=""
              className="text-youcast-white font-light tracking-wide text-xs ml-1"
            >
              Adresse email
            </label>
            <input
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Adresse email incorrect.",
                },
                required: {
                  value: true,
                  message: "Adresse email requise.",
                },
                validate: async (email) =>
                  !(
                    (await checkEmailExists(email)) && userInfo.email !== email
                  ) || "Adresse email déjà prise.",
              })}
              autoComplete="off"
              type="text"
              placeholder="Adresse email"
              className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
            />
            <div className="w-100 text-right mt-1 font-light text-xs ">
              {formState.errors.email ? (
                <span className="text-red-400">
                  {formState.errors.email.message}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-youcast-hover w-full mt-16 mb-6"></div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <div className="mt-4 w-full">
              <label
                htmlFor=""
                className="text-youcast-white font-light tracking-wide text-xs ml-1"
              >
                Nouveau mot de passe
              </label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Mot de passe"
                className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
              />
            </div>
            <div className="mt-4 ml-8 w-full">
              <label
                htmlFor=""
                className="text-youcast-white font-light tracking-wide text-xs ml-1"
              >
                Confirmation
              </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Confirme le mot de passe"
                className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-youcast-hover w-full mt-16 mb-12"></div>
        <div className="flex flex-row justify-center items-center w-full">
          <button
            type="reset"
            className="`h-12 rounded-xl text-youcast-white text-xl bg-transparent mr-12 p-3"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="`h-12 rounded-xl text-youcast-white text-xl bg-youcast-lightbluereal p-3"
          >
            Valider les modifications
          </button>
        </div>
        <div className="w-100 text-center mt-1 font-light text-xs ">
          {validate ? (
            <span className="text-green-400">
              {"Modification bien effectué !"}
            </span>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
