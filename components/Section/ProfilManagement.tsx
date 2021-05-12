import { FormatInputPathObject } from "path";
import Image from "next/image";
import React from "react";
import { useProfilContext } from "../../contexts/profil/profil.context";
import { ButtonItems } from "./SideBar";

export default function ProfilManagement(): JSX.Element {
  const { userInfo, subState } = useProfilContext();

  return (
    <div
      className="w-full bg-youcast-bg flex flex-row justify-center items-center py-2 px-32"
      style={{ height: "86%" }}
    >
      <div className="w-1/3 flex flex-col items-center justify-center h-full">
        <div className="flex justify-center items-center flex-col mb-20">
          <Image src="/testprofil.png" width={111} height={111} />
          <p className="text-youcast-white text-xl font-normal tracking-wider mt-2">
            Roman A.
          </p>
        </div>
        <div className="flex flex-col justify-center mb-10">
          <p
            className="text-youcast-lightgrey font-light tracking-widest text-xs mb-2"
            style={{ fontSize: "10px" }}
          >
            MON PROFIL
          </p>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center items-center">
              <ButtonItems
                text="Modifier mes informations"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2 lg:mr-4 lg:h-5 lg:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex justify-center items-center">
              <ButtonItems
                text="Gérer mon abonnement"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2 lg:mr-4 lg:h-5 lg:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mb-10">
          <p
            className="text-youcast-lightgrey font-light tracking-widest text-xs mb-2"
            style={{ fontSize: "10px" }}
          >
            MON PROFIL
          </p>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center items-center">
              <ButtonItems
                text="Modifier mes préférences"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mb-1 mr-2 lg:mr-4 lg:h-5 lg:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex justify-center items-center">
              <ButtonItems
                text="Site web YouCast"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-2 lg:mr-4 lg:h-5 lg:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-youcast-white to-transparent "></div>
      <div className="w-2/3 flex items-start justify-start h-full flex-col p-20 px-32">
        <p className="text-youcast-white text-2xl">Modifier mes informations</p>
        <div className="h-0.5 bg-youcast-hover w-full mt-8 mb-6"></div>
        <p className="text-youcast-white text-sm tracking-wide font-light">
          Informations personnelles
        </p>
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
                value={userInfo.first_name}
                autoComplete="off"
                type="text"
                placeholder="Prénom"
                className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
              />
            </div>
            <div className="mt-4 ml-8 w-full">
              <label
                htmlFor=""
                className="text-youcast-white font-light tracking-wide text-xs ml-1"
              >
                Nom
              </label>
              <input
                value={userInfo.name}
                autoComplete="off"
                type="text"
                placeholder="Nom"
                className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
              />
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
              value={userInfo.email}
              autoComplete="off"
              type="text"
              placeholder="Adresse email"
              className="w-full bg-youcast-hover text-youcast-white border-youcast-lightgrey border py-2 px-3 pl-4 rounded-xl"
            />
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
      </div>
    </div>
  );
}
