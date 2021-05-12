import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { useGlobalContext } from "../../contexts/global/global.context";
import LogoYouCast from "../LogoYouCast";
import ProfilManagement from "./ProfilManagement";

export interface ISideBarProps {
  children: ReactNode;
  setComponent: (component) => void;
  currentComponent: JSX.Element;
}
export default function SideBar(props: ISideBarProps): JSX.Element {
  function setComponent(component: JSX.Element) {
    props.setComponent(component);
  }
  const router = useRouter();
  const { logout } = useGlobalContext();
  return (
    <div className="h-screen bg-youcast-bg w-screen overflow-hidden flex flex-row">
      <div className="bg-youcast-black flex items-center flex-col p-1 py-8 h-full w-44 lg:w-60 transition-all duration-150">
        <LogoYouCast
          width={154}
          height={54}
          style="cursor-pointer mb-4 lg:mb-8 w-24 lg:w-32"
        />

        <ButtonItems
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          }
          text="Accueil"
        />
        <ButtonItems // Search Button
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          text="Rechercher"
        />
        <div className="flex flex-col justify-end items-end h-full">
          <ButtonItems // Disconnect Button
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            }
            text="Déconnexion"
            onclick={() =>
              logout()
                .then(() => router.push("/login"))
                .catch((err) => console.log(err))
            }
          />
          <div>
            <ButtonItems // myAccount Button
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
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              text="Gérer mon compte"
              onclick={(): void => setComponent(<ProfilManagement />)}
              style={
                props.currentComponent.type.name === "ProfilManagement"
                  ? "bg-youcast-hover"
                  : ""
              }
            />
          </div>

          <ButtonItems // Settings Button
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
            text="Paramètres"
            onclick={(): void => setComponent(<h1> ETTINGS </h1>)}
          />
        </div>
      </div>
      <div className="relative right-0 w-full flex-col flex justify-between h-full">
        {console.log()}
        {props.children}
      </div>
    </div>
  );
}

interface IButtonItemsProps {
  svg: Element;
  text: string;
  onclick?: MouseEventHandler<any>;
  style?: string;
  active?: string;
}
export function ButtonItems(props: IButtonItemsProps): JSX.Element {
  return (
    <div
      {...props.active}
      className={`select-none cursor-pointer flex items-center text-youcast-white text-sm tracking-wide  w-full rounded-xl bg-transparent p-5 py-2 hover:bg-youcast-hover mb-1 ${props.style}`}
      onClick={props.onclick}
    >
      <div className="">{props.svg}</div>

      <p className="h-full">{props.text}</p>
    </div>
  );
}
