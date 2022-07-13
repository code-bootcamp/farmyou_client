import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IBfoodWriteUIProps {
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickToCancel: () => void;
  onChangeContent: (value: string) => void;
  onClickSubmit: (data: any) => Promise<void>;
}
