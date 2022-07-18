import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import QuestionUI from "./Question.presenter";
import { FETCH_INQUIRIES_BY_PRODUCT } from "./Question.queries";
import type { PaginationProps } from "antd";

export default function Question() {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isClick, setIsClick] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

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

  const onChangePage = (event: ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setPage(value);
  };

  useEffect(() => {
    setCount(fetchInquiriesByProductData?.fetchInquiriesByProduct.length);
  }, [fetchInquiriesByProductData]);

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
      page={page}
      count={count}
      onChangePage={onChangePage}
    ></QuestionUI>
  );
}
