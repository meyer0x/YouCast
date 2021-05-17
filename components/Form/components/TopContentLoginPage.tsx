import React from "react";
import BtnRedirect from "../../BtnRedirect";

interface ITopContentLoginPageProps {
  style?: string;
  firstText: string;
}

export default function TopContentLoginPage(
  props: ITopContentLoginPageProps
): JSX.Element {
  return (
    <div
      className={`w-72 sm:w-80 md:w-full flex justify-center items-center flex-col ${props.style}`}
    >
      <p className="text-white font-light text-xs mb-3 text-center tracking-wider">
        {props.firstText}
      </p>
      <div className="flex flex-row">
        <BtnRedirect
          text="Google"
          alt="Logo Google"
          source="/googlelogo.png"
          width="20"
          height="20"
          style="w-32 sm:w-32 md:w-44 text-sm md:text-base px-4 sm:px-0"
        />
        <BtnRedirect
          text="Facebook"
          alt="Logo Google"
          source="/facebooklogo.png"
          width="20"
          height="20"
          style="ml-5 w-32 sm:w-32 md:w-44 text-sm md:text-base px-7 sm:px-0"
        />
      </div>
    </div>
  );
}
