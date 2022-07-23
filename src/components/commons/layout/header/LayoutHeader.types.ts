import { DragEvent } from "react";

export interface IBodyProps {
  isCheck: boolean;
  isCheckList: boolean;
  scroll: boolean;
  // isIn: boolean;
}
export interface ICartProps {
  isIn: boolean;
}
export interface IFetchUserLoggedIn {
  id: string;
  name: string;
  email: string;
  type: string;
}
interface IFiles {
  url: string;
}
export interface IDrag {
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

export interface ILayoutHeaderUIProps {
  isIn: boolean;
  isCheck: boolean;
  isCheckList: boolean;
  scroll: boolean;
  onClickScroll: () => void;
  drop: (event: DragEvent<HTMLDivElement>) => void;
  dragOver: (event: DragEvent<HTMLDivElement>) => void;
  dragLeave: () => void;
  styles: {
    bmBurgerButton: {
      position: string;
      width: string;
      height: string;
      right: string;
      top: string;
    };
    bmBurgerBars: {
      background: string;
    };
    bmBurgerBarsHover: {
      background: string;
    };
  };
  onClickToCart: () => void;
  onClickMoveToSignup: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToMypage: () => void;
  onClickLogout: () => void;
  onClickMoveToMain: () => void;
  data: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
}
