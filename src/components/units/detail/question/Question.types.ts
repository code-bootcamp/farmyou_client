import { ChangeEvent, MouseEvent } from "react";

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
  onClickQuestionEdit: () => void;
  onClickAnswerEdit: () => void;

  onClickModalCancel: () => void;

  isClick: string;
  onClickQuestion: (event: MouseEvent<HTMLDivElement>) => void;

  fetchInquiriesByProductData: {
    fetchInquiriesByProduct: Array<IFetchInquiriesByProduct>;
  };

  page: number;
  count: number;
  onChangePage: (event: ChangeEvent<unknown>, page: number) => void;
}
