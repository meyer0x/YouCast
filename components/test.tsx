import React from "react";
import { useState } from "react";

export default function Test(): JSX.Element {
  const tracks = getAllPodcast().then((data) => {
    return data;
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={(): void => setCount(count + 1)}>
        Cliquez bande de salope.
      </button>
    </div>
  );
}
