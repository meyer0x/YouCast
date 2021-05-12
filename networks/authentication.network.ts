import axios, { AxiosError, AxiosResponse } from "axios";
import { IRegisterPayload } from "../contexts/global/global.context";

// CALL API

interface IAuthLoginPayload {
  email: string;
  password: string;
}
export const authLogin = async (
  payload: IAuthLoginPayload
): Promise<unknown> => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        "http://127.0.0.1:3333/login",
        {
          email: payload.email,
          password: payload.password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response: AxiosResponse) => resolve(response.data))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err: AxiosError) => {
        reject({ error: err.response.status });
      });
  });
};

export const authRegister = async (
  payload: IRegisterPayload
): Promise<unknown> => {
  return new Promise(async (resolve, reject) => {
    axios
      .post("http://127.0.0.1:3333/users", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((err: AxiosError) =>
        reject({ error: err.response.status, content: err.response.data })
      );
  });
};
