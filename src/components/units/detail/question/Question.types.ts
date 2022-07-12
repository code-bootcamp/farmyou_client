import { MouseEvent } from "react";

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
}
