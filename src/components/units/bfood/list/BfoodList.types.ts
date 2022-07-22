import { ChangeEvent } from "react";

export interface IBfoodListUIProps {
  data: any;
  drag: (event: any) => void;
  onChangeSorted: (event: any) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  loadFunc: () => void;
  onClickToDetail: () => void;
}
