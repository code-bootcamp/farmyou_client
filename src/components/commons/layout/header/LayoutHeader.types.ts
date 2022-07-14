import { MouseEventHandler } from "react";

export interface IBodyProps {
  isCheck: boolean;
  isCheckList: boolean;
  scroll: boolean;
  // isIn: boolean;
}
export interface ICartProps {
  isIn: boolean;
}
export interface ILayoutHeaderUIProps {
  isIn: boolean;
  isCheck: boolean;
  isCheckList: boolean;
  scroll: boolean;
  onClickScroll: () => void;
  drop: (event: any) => void;
  dragOver: (event: any) => void;
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
  isLogged: boolean;
}
