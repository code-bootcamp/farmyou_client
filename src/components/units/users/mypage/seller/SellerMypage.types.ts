import { ChangeEvent, MouseEvent, RefObject } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IForm {
  name: string;
  password: string;
  phone: string;
  invoice: string;
}

export interface IFetchUglyProductsBySeller {
  id: string;
  title: string;
  price: number;
  createdAt: Date;
  files: Array<{ url: string }>;
}

export interface IFetchCompletedPaymentsForSeller {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files: {
      url: string;
    };
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
export interface IFiles {
  url: string;
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
  isSelect: boolean;
  onClickSellingList: () => void;
  onClickPaymentList: () => void;
  onClickMoveToEditPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDeleteUglyProduct: (event: MouseEvent<HTMLDivElement>) => void;
  onClickInvoiceRegistration: () => void;
  onChangeInvoiceNum: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleModal: (event: MouseEvent<HTMLDivElement>) => void;
  onClickInvoiceEdit: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToUglyDetail: (event: MouseEvent<HTMLDivElement>) => void;
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  invoiceNum: string;
  onClickDefaultFile: () => void;
  fetchUglyProductsCount: number;
  fetchCompletedPaymentsCount: number;
  onClickLogout: () => void;

  fetchUglyProductsBySellerData: {
    fetchUglyProductsBySeller?: Array<IFetchUglyProductsBySeller>;
  };
  onClickFetchMore: () => void;
  sliceNumber: number;
  data: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
      files: Array<IFiles>;
      phone: string;
    };
  };
  fetchCompletedPaymentsForSellerData: {
    fetchCompletedPaymentsForSeller: Array<IFetchCompletedPaymentsForSeller>;
  };
}

export interface ISellerMypageProps {
  userData: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
      files: Array<IFiles>;
      phone: string;
    };
  };
}
