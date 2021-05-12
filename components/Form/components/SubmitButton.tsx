import React from "react";

interface ISubmitButtonProps {
  style: string;
  isTransparent?: boolean;
  text: string;
}

export default function SubmitButton(props: ISubmitButtonProps): JSX.Element {
  return (
    <button
      type="submit"
      className={`w-96 h-12 rounded-xl text-youcast-white text-xl  ${
        props.style
      } ${
        props.isTransparent ? "bg-transparent border" : "bg-youcast-lightblue"
      }`}
    >
      {props.text}
    </button>
  );
}
