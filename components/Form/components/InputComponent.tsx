import React from "react";
import { useState, useEffect } from "react";

interface IInputComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customErrors?: any;
  style: string;
  label: string;
  type: string;
  uniqueID: string;
  legend: string;
  messageValidation?: string;
}

export const InputComponent = (props: IInputComponent): JSX.Element => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {}, [visible]);
  return (
    <div className={`w-72 sm:w-80 md:w-96 h-14 ${props.style} `}>
      <fieldset className="border rounded-xl flex justify-center flex-row items-center border-youcast-white">
        <legend className="text-youcast-white font-light text-xs tracking-widest ml-1 pl-1 pr-1 ">
          {props.legend}
        </legend>
        <input
          autoComplete="off"
          {...props.register}
          type={
            props.type == "password"
              ? visible
                ? "text"
                : "password"
              : props.type
          }
          id={props.uniqueID}
          placeholder={props.label}
          className="w-full bg-transparent text-youcast-white"
        />
        {props.type == "password" &&
          (visible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              onClick={(): void => {
                setVisible(!visible);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              onClick={(): void => {
                setVisible(!visible);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ))}
      </fieldset>
      <div className="w-100 text-right mt-1 font-light text-xs ">
        {props.customErrors ? (
          <span className="text-green-400">{props.messageValidation}</span>
        ) : (
          <span className="text-red-400">{props.error?.message}</span>
        )}
      </div>
    </div>
  );
};
