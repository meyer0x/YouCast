import Image from "next/image";
import React from "react";

interface IBtnRedirectProps {
  source: string;
  text: string;
  alt: string;
  width: string;
  height: string;
  style: string;
}
export default function BtnRedirect(props: IBtnRedirectProps): JSX.Element {
  return (
    <button
      className={`flex justify-center items-center h-12 w-44 border-white border rounded-xl text-youcast-white outline-none focus:outline-non ${props.style}`}
    >
      <Image
        src={props.source}
        alt={props.alt}
        width={props.width}
        height={props.height}
      ></Image>
      <p className="ml-4 text-color">{props.text}</p>
    </button>
  );
}
