import { ChangeEvent, MouseEvent } from "react";

export interface IFiles {
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

export interface IDetailProps {
  data: {
    __typename: string;
    id: string;
    title: string;
    content: string;
    origin?: string;
    quantity: number;
    createdAt: Date;
    price: number;
    seller?: {
      id: string;
      name: string;
    };
    directStore?: {
      name: string;
    };
    files: Array<IFiles>;
  };
}

export interface IDetailUIProps {
  onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
  mainImageSrc: string;
  onChangeBuyQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
  buyQuantity: number;
  onClickBasketsButton: () => void;
  onClickBuyButton: () => void;
  data: {
    __typename: string;
    id: string;
    title: string;
    content: string;
    origin?: string;
    quantity: number;
    createdAt: Date;
    price: number;
    seller?: {
      id: string;
      name: string;
    };
    directStore?: {
      name: string;
    };
    files: Array<IFiles>;
  };
}
