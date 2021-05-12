import Cookies from "js-cookie";

export const getCredentialStorage = (): string => {
  console.log("getCredential", Cookies.get("credential"));
  return Cookies.get("credential");
};

export const setCredentialStorage = (token: string): string => {
  return Cookies.set("credential", token);
};

export const deleteCredentialStorage = (): void => {
  Cookies.remove("credential");
};
