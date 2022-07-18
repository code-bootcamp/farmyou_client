import { ChangeEvent, RefObject } from "react";

export interface IMainUIProps {
  localRef: RefObject<HTMLDivElement>;
  onClickLocal: () => void;
  onClickMove: (move: string) => () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  isSearch: Boolean;
  listData: any;
}
