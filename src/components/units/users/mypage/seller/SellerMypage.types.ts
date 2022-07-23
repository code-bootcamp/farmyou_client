import { ChangeEvent, RefObject } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IForm {
  name: string;
  password: string;
  phone: string;
}

export interface IFetchUglyProductsBySeller {
  id: string;
  title: string;
  price: number;
  createdAt: Date;
}

export interface ISellerMypageUiProps {
  showEditModal: () => void;
  showPasswordModal: () => void;
  isUserVisible: boolean;
  passwordCancel: () => void;
  editCancel: () => void;
  isEditVisible: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickConfirm: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUpload: () => void;
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  handleSubmit: UseFormHandleSubmit<IForm>;
  register: UseFormRegister<IForm>;
  error: string;
  onClickEdit: (data: IForm) => Promise<void>;
  onClickToWrite: () => void;
  fetchUglyProductsBySellerData: {
    fetchUglyProductsBySeller?: Array<IFetchUglyProductsBySeller>;
  };
  onClickFetchMore: () => void;
  sliceNumber: number;
  userData: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
    };
  };
}

export interface ISellerMypageProps {
  userData: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
    };
  };
}
