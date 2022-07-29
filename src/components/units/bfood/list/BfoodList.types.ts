import { ChangeEvent, DragEvent, MouseEvent } from "react";

export interface IFiles {
  url: string;
}
export interface IFetchUglyProductsSortedByTitle {
  id: string;
  title: string;
  price: number;
  origin: string;
  quantity: number;
  createdAt: Date;
  content: string;
  seller: {
    name: string;
    email: string;
    grade: string;
    id: string;
    like: number;
    phone: string;
  };
  files: Array<IFiles>;
}

export interface IBfoodListUIProps {
  data: {
    fetchUglyProductsSortedByTitle: Array<IFetchUglyProductsSortedByTitle>;
  };
  drag: (event: DragEvent<HTMLDivElement>) => void;
  onChangeSorted: (event: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  loadFunc: () => void;
}
