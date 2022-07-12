import { atom } from "recoil";

export const TokenState = atom({
  key: "accessToken",
  default: "",
});

export const IsLoadedState = atom({
  key: "isload",
  default: false,
});
