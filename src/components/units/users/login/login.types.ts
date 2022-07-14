import { RadioChangeEvent } from "antd";

import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  email: string;
  password: string;
}

export interface IPropsLogin {
  onClickLogin: SubmitHandler<FieldValues>;
  onClickSellerLogin: SubmitHandler<FieldValues>;
  onClickMove: (move: string) => () => void;
  onChangeAuth: (event: RadioChangeEvent) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  isUser: boolean;
}
