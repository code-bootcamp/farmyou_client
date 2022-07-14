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
  isSeller: boolean;
}
