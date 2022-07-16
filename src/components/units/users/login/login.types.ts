import { RadioChangeEvent } from "antd";

import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IData {
  email: string;
  password: string;
}

export interface IPropsLogin {
  onClickLogin: (data: IData) => Promise<void>;
  onClickSellerLogin: (data: IData) => Promise<void>;
  onClickMove: (move: string) => () => void;
  onChangeAuth: (event: RadioChangeEvent) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  isUser: string;
}
