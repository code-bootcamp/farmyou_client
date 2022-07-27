import { CheckboxChangeEvent } from "antd/lib/checkbox";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IBaskets {
  id: string;
  count: number;
  price: number;
}

export type IPayProduct = {
  content: string;
  count: number;
  createdAt: Date;
  id: string;
  origin: string;
  price: number;
  quantity: number;
  files: Array<{ url: string }>;
  seller: {
    email: string;
    grade: string;
    id: string;
    like: number;
    name: string;
    phone: string;
  };
  title: string;
};
export interface IStorage {
  content?: string;
  count?: number;
  createdAt?: Date;
  id?: string;
  phone?: string;
}

export interface IDaumPostcode {
  zonecode: string;
  address: string;
}

export interface IFetchAddressOfTheUser {
  address?: string;
  detailedAddress?: string;
  id?: string;
  isMain?: boolean;
  postalCode?: string;
  user?: {
    id: string;
    email: string;
    name: string;
    phone: string;
  };
}

export interface IPaymentProps {
  data?: {
    fetchUserLoggedIn?: {
      id?: string;
    };
  };
}

export interface IPaymentUIProps {
  isCart: string;
  localfoodBaskets: Array<{
    content: string;
    count: number;
    createdAt: Date;
    files: Array<{ url: string }>;
    id: string;
    price: number;
    quantity: number;
    title: string;
    directStore: {
      name: string;
    };
  }>;
  bfoodBaskets: Array<{
    content: string;
    count: number;
    createdAt: Date;
    files: Array<{ url: string }>;
    id: string;
    price: number;
    quantity: number;
    title: string;
    origin: string;
    seller: {
      name: string;
      id: string;
      phone: string;
    };
  }>;
  payProduct: {
    content: string;
    count: number;
    createdAt: Date;
    files: Array<{ url: string }>;
    id: string;
    price: number;
    quantity: number;
    title: string;
    origin: string;
    seller: {
      name: string;
      id: string;
      phone: string;
    };
  };
  localPrice: number;
  bPrice: number;
  requestPay: () => void;
  isVisible: boolean;
  toggleModal: () => void;
  onClickModalCancel: () => void;
  data: {
    fetchAddressesOfTheUser: Array<IFetchAddressOfTheUser>;
  };
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  defaultValue: IFetchAddressOfTheUser;
  onClickMainAddressSetting: (el: IFetchAddressOfTheUser) => () => void;
  onChangeCheckBox: (event: CheckboxChangeEvent) => void;
  onClickNewAddressButton: () => void;
  newAddress: boolean;
  onClickNewAddressCancel: () => void;
  isModalVisible: boolean;
  handleComplete: (data: IDaumPostcode) => void;
  toggleDaumPostCode: () => void;
  onClickNewAddressRegistration: () => void;
}
