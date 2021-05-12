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
      className={`w-full flex justify-center items-center flex-col ${props.style}`}
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
          style=""
        />
        <BtnRedirect
          text="Facebook"
          alt="Logo Google"
          source="/facebooklogo.png"
          width="24"
          height="24"
          style="ml-5"
        />
      </div>
    </div>
  );
}
