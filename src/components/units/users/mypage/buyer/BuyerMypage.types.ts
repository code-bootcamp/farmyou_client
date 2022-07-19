import { ChangeEvent, MutableRefObject } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IBuyerMypageUIProps {
  showEditModal: () => void;
  showPasswordModal: () => void;
  isUserVisible: boolean;
  passwordCancel: () => void;
  editCancel: () => void;
  isEditVisible: boolean;
  userAddressData: any;
  onChangePassword: (event: any) => void;
  onClickConfirm: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUpload: () => void;
  fileRef: MutableRefObject<null>;
  fileUrl: string;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickEdit: () => void;
  error: string;
  onClickDeleteAddress: (event: any) => void;
  onClickMainAddress: (event: any) => void;
}
