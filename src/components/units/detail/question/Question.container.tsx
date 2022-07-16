import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import QuestionUI from "./Question.presenter";
import { FETCH_INQUIRIES_BY_PRODUCT } from "./Question.queries";

export default function Question() {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isClick, setIsClick] = useState("");

  const { data: fetchInquiriesByProductData } = useQuery(
    FETCH_INQUIRIES_BY_PRODUCT,
    {
      variables: {
        productId: router.query.id,
      },
    }
  );

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const onClickQuestionRegistration = () => {
    toggleModal();
  };
  const onClickAnswerRegistration = () => {
    setIsAnswer((prev) => !prev);
    toggleModal();
  };

  const onClickQuestionEdit = () => {
    setIsEdit((prev) => !prev);
    toggleModal();
  };
  const onClickAnswerEdit = () => {
    setIsAnswer((prev) => !prev);
    setIsEdit((prev) => !prev);
    toggleModal();
  };
  const onClickModalCancel = () => {
    toggleModal();
    setIsAnswer(false);
    setIsEdit(false);
  };

  const onClickQuestion = (event: MouseEvent<HTMLDivElement>) => {
    setIsClick(event.currentTarget.id);
    console.log(event.currentTarget.id);
  };

  console.log(fetchInquiriesByProductData);

  return (
    <QuestionUI
      isVisible={isVisible}
      toggleModal={toggleModal}
      isAnswer={isAnswer}
      onClickAnswerRegistration={onClickAnswerRegistration}
      onClickQuestionRegistration={onClickQuestionRegistration}
      isEdit={isEdit}
      onClickQuestionEdit={onClickQuestionEdit}
      onClickAnswerEdit={onClickAnswerEdit}
      onClickModalCancel={onClickModalCancel}
      isClick={isClick}
      onClickQuestion={onClickQuestion}
      fetchInquiriesByProductData={fetchInquiriesByProductData}
    ></QuestionUI>
  );
}
