import React from "react";

interface ISelectComponentProps {
  listOption: string[][];
  defaultOption: string;
  style?: string;
  legend: string;
  customErrors?: string;
  messageValidation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}
export default function SelectComponent(
  props: ISelectComponentProps
): JSX.Element {
  return (
    <div className={`w-72 sm:w-80 md:w-96 h-14 ${props.style} `}>
      <fieldset className="border rounded-xl flex justify-center flex-row items-center border-youcast-white">
        <legend className="text-youcast-white font-light text-xs tracking-widest ml-1 pl-1 pr-1 ">
          {props.legend}
        </legend>
        <select
          className={` w-full bg-transparent text-youcast-white`}
          {...props.register}
        >
          <option>{props.defaultOption}</option>
          {props.listOption.map((x) => (
            <option
              className="bg-transparent text-youcast-bg"
              key={x[1]}
              value={x[1]}
            >
              {x[0]}
            </option>
          ))}
        </select>
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
}
