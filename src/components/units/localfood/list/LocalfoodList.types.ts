import { ChangeEvent, DragEvent, MouseEvent } from "react";
export interface IFiles {
  url: string;
}
export interface IFetchDirectProductsSortedByTitle {
  id: string;
  title: string;
  content: string;
  price: number;
  createdAt: Date;
  quantity: number;
  directStore: {
    name: string;
  };
  files: Array<IFiles>;
}
export interface ILocalfoodListUIProps {
  onClickAll: () => void;
  onClickCategory: (event: MouseEvent<HTMLDivElement>) => void;
  data: {
    fetchDirectProductsSortedByTitle: Array<IFetchDirectProductsSortedByTitle>;
  };
  drag: (event: DragEvent<HTMLDivElement>) => void;
  onChangeSorted: (event: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  storeName: string;
}
