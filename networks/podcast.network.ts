import axios, { AxiosError, AxiosResponse } from "axios";

// CALL API
//TODO : SECURISE THIS
export const getAllPodcast = async (): Promise<unknown> => {
  return await fetch("http://127.0.0.1:3333/podcast/all", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((r) => {
      return r.json;
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((err) => {
      return err;
    });
};
