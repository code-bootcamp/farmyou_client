import { MouseEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

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

  onClickQuestionRegistrationButton: () => void;

  register: UseFormRegister<FieldValues>;

  fetchInquiriesByProductData: {
    fetchInquiriesByProduct: Array<IFetchInquiriesByProduct>;
  };
}

export interface IQuestionProps {
  fetchUglyProductData: {
    fetchUglyProduct?: {
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
  };
}
