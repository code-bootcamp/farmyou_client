import { RefObject } from "react";

export interface IMainUIProps {
  localRef: RefObject<HTMLDivElement>;
  onClickLocal: () => void;
}
