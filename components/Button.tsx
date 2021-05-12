import Link from "next/link";
import React from "react";

interface IButtonProps {
  style: string;
  isTransparent?: boolean;
  text: string;
  link?: string;
}

export default function Button(props: IButtonProps): JSX.Element {
  return (
    <Link href={props.link}>
      <button
        type="submit"
        className={`w-auto md:w-96 h-12 rounded-xl text-youcast-white text-xl  ${
          props.style
        } ${
          props.isTransparent ? "bg-transparent border" : "bg-youcast-lightblue"
        }`}
      >
        {props.text}
      </button>
    </Link>
  );
}
