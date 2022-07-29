import { ChangeEvent, MouseEvent, MutableRefObject, RefObject } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IForm {
  name: string;
  password: string;
  phone: string;
  imageUrl: string;
}
export interface ICompletePaymentsLocal {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  quantity: string;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files: Array<{
      url: string;
    }>;
    directStore?: {
      id: string;
      name: string;
    };
  };
  invoice: string;
}

export interface IFetchCanceledPayments {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  quantity: string;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files: Array<{
      url: string;
    }>;
    directStore?: {
      id: string;
      name: string;
    };
  };
  productUgly?: {
    id: string;
    title: string;
    price: number;
    files: Array<{
      url: string;
    }>;
    seller?: {
      name: string;
      phone: string;
    };
  };
  invoice: string;
}

export interface IFetchCompletePayments {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  quantity: string;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files: Array<{
      url: string;
    }>;
    directStore?: {
      id: string;
      name: string;
    };
  };
  productUgly?: {
    id: string;
    title: string;
    price: number;
    files: Array<{
      url: string;
    }>;
    seller?: {
      id: string;
      name: string;
      phone: string;
    };
  };
  invoice: string;
}

export interface IOnClickEdit {
  name: string;
  password: string;
  phone: string;
  imageUrl: string;
}

export interface IFetchAddressesOfTheUser {
  id: string;
  address: string;
  isMain: boolean;
  detailedAddress: string;
}

export interface IUserAddressData {
  fetchAddressesOfTheUser: Array<IFetchAddressesOfTheUser>;
}
export interface IFiles {
  url: string;
}
export interface IBuyerMypageUIProps {
  fetchCompletePaymentsCount: number;
  fetchCanceledPaymentsCount: number;
  fetchCompletedPaymentsLocalCount: number;
  fetchCompletePaymentsUglyCount: number;
  fetchCanceledPaymentsLocalCount: number;
  fetchCanceledPaymentsUglyCount: number;
  isSelect: boolean;
  trackingRef: MutableRefObject<HTMLFormElement | undefined>;
  onClickLocalList: () => void;
  onClickBfoodList: () => void;
  onClickLocalDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBfoodDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPostTracking: () => void;
  showEditModal: () => void;
  showPasswordModal: () => void;
  isUserVisible: boolean;
  passwordCancel: () => void;
  editCancel: () => void;
  isEditVisible: boolean;
  userAddressData: IUserAddressData;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickConfirm: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUpload: () => void;
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  handleSubmit: UseFormHandleSubmit<IForm>;
  register: UseFormRegister<IForm>;
  onClickEdit: (data: IForm) => void;
  error: string;
  onClickDeleteAddress: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMainAddress: (event: MouseEvent<HTMLDivElement>) => void;

  data: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
      files: Array<IFiles>;
    };
  };
  completePaymentsLocal: Array<IFetchCompletePayments> | undefined;
  completePaymentsUgly: Array<IFetchCompletePayments> | undefined;
  canceledPaymentsLocal: Array<IFetchCanceledPayments> | undefined;
  canceledPaymentsUgly: Array<IFetchCanceledPayments> | undefined;
  sliceNumber: number;
  onClickFetchMore: () => void;
  onClickProductEditButton: (event: MouseEvent<HTMLDivElement>) => void;
  onClickCancelPayment: (
    el: IFetchCanceledPayments
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  invoiceCount: number;
  payOrCancel: string;
  onClickPay: () => void;
  onClickCancel: () => void;
  onClickDefaultFile: () => void;
  onClickLogout: () => void;
}

export interface IBuyerMypageProps {
  userData: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
      files: Array<IFiles>;
    };
  };
}
