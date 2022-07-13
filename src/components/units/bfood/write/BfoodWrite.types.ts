import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IBfoodWriteUIProps {
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickToCancel: () => void;
  onChangeContents: (value: string) => void;
}
