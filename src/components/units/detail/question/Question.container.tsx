import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import QuestionUI from "./Question.presenter";
import {
  CREATE_INQUIRY,
  EDIT_INQUIRY,
  FETCH_INQUIRIES_BY_PRODUCT,
  FETCH_USER_LOGGED_IN,
  POST_RESPONSE,
} from "./Question.queries";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { IFetchInquiriesByProduct, IQuestionProps } from "./Question.types";

const IS_LOCAL = ["/localfood/[id]"];
const schema = yup.object({
  title: yup.string().required("필수입력사항입니다."),
  content: yup.string().required("필수입력사항입니다."),
});

export default function Question(props: IQuestionProps) {
  const router = useRouter();
  const isLocal = IS_LOCAL.includes(router.pathname);

  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isClick, setIsClick] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const [createInquiry] = useMutation(CREATE_INQUIRY);
  const [postResponse] = useMutation(POST_RESPONSE);
  const [editInquiry] = useMutation(EDIT_INQUIRY);

  const { data: fetchInquiriesByProductData, refetch } = useQuery(
    FETCH_INQUIRIES_BY_PRODUCT,
    {
      variables: {
        productId: router.query.id,
      },
    }
  );
  const { data: userLoggedData } = useQuery(FETCH_USER_LOGGED_IN);

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const onClickQuestionRegistration = () => {
    toggleModal();
  };

  const onClickAnswerRegistration = () => {
    setIsAnswer(true);
    toggleModal();
  };

  const onClickQuestionEdit = (el: IFetchInquiriesByProduct) => () => {
    setIsEdit(true);
    setValue("title", el.title);
    setValue("content", el.question);
    trigger("title");
    trigger("content");
    toggleModal();
  };

  const onClickQuestionEditButton = async (data: any) => {
    try {
      await editInquiry({
        variables: {
          inquiryId: isClick,
          title: data.title,
          question: data.content,
        },
      });
      onClickModalCancel();
      refetch();
      Modal.success({
        content: "수정에 성공했습니다.",
      });
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
      onClickModalCancel();
    }
  };

  const onClickAnswerEdit = (el: IFetchInquiriesByProduct) => () => {
    setIsAnswer(true);
    setIsEdit(true);
    setValue("title", el.answerTitle);
    setValue("content", el.answer);
    trigger("title");
    trigger("content");
    toggleModal();
  };

  const onClickAnswerRegistrationButton = async (data: any) => {
    try {
      const result = await postResponse({
        variables: {
          inquiryId: isClick,
          answerTitle: data.title,
          answer: data.content,
        },
      });
      onClickModalCancel();
      await refetch();
      Modal.success({
        content: result.data.postResponse,
      });
    } catch (error: any) {
      onClickModalCancel();
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickModalCancel = () => {
    toggleModal();
    setValue("title", "");
    setValue("content", "");
    trigger("title");
    trigger("content");
    setIsAnswer(false);
    setIsEdit(false);
  };

  const onClickQuestion = (event: MouseEvent<HTMLDivElement>) => {
    setIsClick(event.currentTarget.id);
  };

  const onClickQuestionRegistrationButton = async (data: any) => {
    try {
      const result = await createInquiry({
        variables: {
          title: data.title,
          question: data.content,
          productDirectId: isLocal ? router.query.id : "",
          productUglyId: isLocal ? "" : router.query.id,
        },
      });
      await refetch();
      console.log(result);
      onClickModalCancel();
      Modal.success({
        content: "등록에 성공했습니다.",
      });
    } catch (error: any) {
      onClickModalCancel();
      Modal.error({
        content: error.message,
      });
    }
  };

  const onChangePage = (event: ChangeEvent<unknown>, value: number) => {
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
      onClickQuestionRegistrationButton={onClickQuestionRegistrationButton}
      fetchInquiriesByProductData={fetchInquiriesByProductData}
      register={register}
      handleSubmit={handleSubmit}
      userLoggedData={userLoggedData}
      data={props.data}
      onClickAnswerRegistrationButton={onClickAnswerRegistrationButton}
      onClickQuestionEditButton={onClickQuestionEditButton}
      page={page}
      count={count}
      onChangePage={onChangePage}
    ></QuestionUI>
  );
}
