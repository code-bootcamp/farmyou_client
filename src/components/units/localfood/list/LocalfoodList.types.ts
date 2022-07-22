import { ChangeEvent, MouseEvent } from "react";

export interface ILocalfoodListUIProps {
  onClickAll: (event: any) => void;
  onClickCategory: (event: any) => void;
  data: any;
  drag: (event: any) => void;
  onChangeSorted: (event: any) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
