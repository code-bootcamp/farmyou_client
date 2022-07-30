import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
export const TokenState = atom({
  key: "accessToken" + uuidv4(),
  default: "",
});
