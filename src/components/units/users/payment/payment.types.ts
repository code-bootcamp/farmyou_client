import { CheckboxChangeEvent } from "antd/lib/checkbox";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IStorage {
  content?: string;
  count?: number;
  createdAt?: Date;
  id?: string;
  phone?: string;
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
  localfoodBaskets: any;
  bfoodBaskets: any;
  payProduct: any;
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
}
