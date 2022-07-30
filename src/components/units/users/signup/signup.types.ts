import { ChangeEvent } from "react";

import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IPropsSignUp {
  isSeller: boolean;
}
export interface IData {
  email?: string;
  name?: string;
  password?: string;
  detailedAddress?: string;
}
export interface IPropsSignUpUI {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickShowModal: () => void;
  isModal: boolean;
  handleComplete: (data: any) => void;
  address: string;
  postalCode: string;
  onClickMove: (move: string) => () => void;
  formState: FormState<FieldValues>;
  onClickCreateUser: (data: IData) => Promise<void>;
  onClickCreateSeller: (data: IData) => Promise<void>;
  onClickCheckPhone: () => void;
  onClickSubmitToken: () => void;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
  isSeller: boolean;
  isStart: boolean;
  isCheck: boolean;
  minutes: number;
  seconds: number;
}
