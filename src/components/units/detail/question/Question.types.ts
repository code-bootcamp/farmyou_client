import { ChangeEvent, MouseEvent } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface IData {
  title: string;
  content: string;
}

export interface IFetchInquiriesByProduct {
  id: string;
  question: string;
  status: string;
  title: string;
  answerTitle: string;
  answer: string;
  createdAt: Date;
  user?: {
    id: string;
    name: string;
  };
}

export interface IQuestionUIProps {
  isVisible: boolean;
  toggleModal: () => void;

  isAnswer: boolean;
  onClickAnswerRegistration: () => void;
  onClickQuestionRegistration: () => void;

  isEdit: boolean;
  onClickQuestionEdit: (el: any) => () => void;
  onClickAnswerEdit: () => void;

  onClickModalCancel: () => void;

  isClick: string;
  onClickQuestion: (event: MouseEvent<HTMLDivElement>) => void;

  onClickQuestionRegistrationButton: any;
  onClickAnswerRegistrationButton: (data: IData) => Promise<void>;
  onClickQuestionEditButton: (data: IData) => Promise<void>;

  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;

  fetchInquiriesByProductData: {
    fetchInquiriesByProduct: Array<IFetchInquiriesByProduct>;
  };
  userLoggedData: {
    fetchUserLoggedIn: {
      id: string;
      name: string;
      email: string;
      phone: string;
      type: string;
    };
  };
  data: {
    id?: string;
    title?: string;
    content?: string;
    origin?: string;
    quantity?: number;
    createdAt?: Date;
    price?: number;
    seller?: {
      id: string;
      name: string;
    };
  };

  page: number;
  count: number;
  onChangePage: (event: ChangeEvent<unknown>, page: number) => void;
}

export interface IQuestionProps {
  data: {
    id?: string;
    title?: string;
    content?: string;
    origin?: string;
    quantity?: number;
    createdAt?: Date;
    price?: number;
    seller?: {
      id: string;
      name: string;
    };
  };
}
