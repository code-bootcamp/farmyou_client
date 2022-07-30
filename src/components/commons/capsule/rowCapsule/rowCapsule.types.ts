import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

interface IFiles {
  url: string;
}
export interface IBaskets {
  __typename: string;
  id: string;
  title: string;
  price: number;
  origin?: string;
  quantity: number;
  createdAt: Date;
  count: number;
  content: string;
  seller?: {
    name: string;
    email: string;
    grade: string;
    id: string;
    like: number;
    phone: string;
  };
  directStore?: {
    name: string;
  };
  files: Array<IFiles>;
}

export interface IRowCapsuleProps {
  foodEl: IBaskets;
  index: number;
  foodSum: number;
  foodSums: number[];
  setFoodSums: Dispatch<SetStateAction<number[]>>;
  setFoodBasketsCount: Dispatch<SetStateAction<number>>;
  id: string;
}

export interface IRowCapsuleUIProps {
  foodEl: IBaskets;
  count: number;
  // setCount: Dispatch<SetStateAction<number>>;
  onClickCountUp: () => void;
  onClickCountDown: () => void;
  onChangeCount: (event: ChangeEvent<HTMLInputElement>) => void;
  onCliCkDeleteFood: (event: MouseEvent<HTMLDivElement>) => void;
  id: string;
}
