import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

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
export interface IBasketUIProps {
  bFoodData: IBaskets[];
  setBfoodBasketsCount: Dispatch<SetStateAction<number>>;
  bFoodSum: number;
  bFoodSums: number[];
  setBFoodSums: Dispatch<SetStateAction<number[]>>;
  localFoodData: IBaskets[];
  setLocalfoodBasketsCount: Dispatch<SetStateAction<number>>;
  localFoodSum: number;
  localFoodSums: number[];
  setLocalFoodSums: Dispatch<SetStateAction<number[]>>;
  router: NextRouter;
  onClickToPayment: () => void;

  //   {
  //     _id: string;
  //     title: string;
  //     quantity: number;
  //     price: number;
  //     seller: {
  //       name: "string";
  //     };
  //   };
}
