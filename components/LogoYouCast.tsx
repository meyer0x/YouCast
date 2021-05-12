import Image from "next/image";
import React from "react";

interface ILogoYouCastProps {
  style?: string;
  width: number;
  height: number;
}
export default function LogoYouCast(props: ILogoYouCastProps): JSX.Element {
  return (
    <div className={props.style}>
      <Image
        src="/logoyoucast.svg"
        alt="Logo YouCast"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
