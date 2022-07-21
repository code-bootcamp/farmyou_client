import { jsx } from "@emotion/react";
import { ChangeEvent, LegacyRef, MutableRefObject } from "react";
import Countdown from "react-countdown";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IPropsSignUp {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickShowModal: () => void;
  isModal: boolean;
  handleComplete: (data: any) => void;
  address: string;
  postalCode: string;
  onClickMove: (move: string) => () => void;
  formState: FormState<FieldValues>;
  onClickCreateUser: (data: any) => void;
  onClickCreateSeller: (data: any) => void;
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
