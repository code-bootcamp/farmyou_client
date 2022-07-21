import { ChangeEvent, MouseEvent, MutableRefObject, RefObject } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ICompletePaymentsLocal {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files?: {
      url: string;
    };
    directStore?: {
      id: string;
      name: string;
    };
  };
  invoice: string;
}

export interface ICanceledPaymentsLocal {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files?: {
      url: string;
    };
  };
  productUgly?: {
    id: string;
    title: string;
    price: number;
    files?: {
      url: string;
    };
  };
  invoice: string;
}

export interface IFetchCompletePayments {
  id: string;
  impUid: string;
  amount: number;
  createdAt: Date;
  productDirect?: {
    id: string;
    title: string;
    price: number;
    files?: {
      url: string;
    };
  };
  productUgly?: {
    id: string;
    title: string;
    price: number;
    files?: {
      url: string;
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

export interface IBuyerMypageUIProps {
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
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  onClickEdit: (data: IOnClickEdit) => void;
  error: string;
  onClickDeleteAddress: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMainAddress: (event: MouseEvent<HTMLDivElement>) => void;
  userData: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
    };
  };
  completePaymentsLocal: Array<ICompletePaymentsLocal> | undefined;
  completePaymentsUgly: Array<ICompletePaymentsLocal> | undefined;
  canceledPaymentsLocal: Array<ICanceledPaymentsLocal> | undefined;
  canceledPaymentsUgly: Array<ICanceledPaymentsLocal> | undefined;
  sliceNumber: number;
  onClickFetchMore: () => void;
  onClickProductEditButton: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IBuyerMypageProps {
  userData: {
    fetchUserLoggedIn: {
      id?: string;
      name?: string;
      email?: string;
      type?: string;
    };
  };
}
