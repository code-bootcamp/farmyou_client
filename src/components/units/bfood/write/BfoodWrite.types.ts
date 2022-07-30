import {
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  title: string;
  content: string;
  price: number;
  quantity: number;
  origin: string;
}

interface IFiles {
  url: string;
}

export interface IBfoodWriteUIProps {
  isEdit?: boolean;
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  getValues: UseFormGetValues<IData>;
  onClickToCancel: () => void;
  onChangeContent: (value: string) => void;
  onClickSubmit: (data: IData) => Promise<void>;
  onClickEdit: (data: IData) => Promise<void>;
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: Array<string>;
  fetchProductUglyData?: {
    fetchProductUgly: {
      id: string;
      title: string;
      content: string;
      price: number;
      quantity: number;
      origin: string;
      files: Array<IFiles>;
    };
  };
}

export interface IBfoodWriteProps {
  isEdit?: boolean;
  fetchProductUglyData?: {
    fetchProductUgly: {
      id: string;
      title: string;
      content: string;
      price: number;
      quantity: number;
      origin: string;
      files: Array<IFiles>;
    };
  };
}
