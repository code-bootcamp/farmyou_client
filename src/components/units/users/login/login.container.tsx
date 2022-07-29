/* eslint-disable no-unused-expressions */
import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, RadioChangeEvent } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { TokenState } from "../../../commons/store";
import LoginUI from "./login.presenter";
import {
  CHECK_TOKEN,
  FETCH_USER_BY_EMAIL,
  LOG_IN_SELLER,
  LOG_IN_USER,
  SEND_TOKEN,
  UPDATE_SELLER_PASSWORD,
  UPDATE_USER_PASSWORD,
} from "./login.queries";
import { IData } from "./login.types";
import * as yup from "yup";

export default function Login() {
  const setToken = useSetRecoilState(TokenState);
  const [isCheck, setIsCheck] = useState(false);
  const [loginUser] = useMutation(LOG_IN_USER);
  const [loginSeller] = useMutation(LOG_IN_SELLER);
  const [isUser, setIsUser] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const router = useRouter();

  const schema = yup.object({
    password2: yup
      .string()
      .max(15, "최대 15자 입니다.")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영문,숫자,특수문자를 포함해야합니다."
      ),
  });
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 비밀번호 찾기
  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  const handleOk = () => {
    if (userType === "") {
      Modal.error({ content: "이메일이 존재하지 않습니다" });
      return;
    }
    if (isCheck === false) {
      Modal.error({ content: "인증을 진행해주세요" });
      return;
    }
    setIsModal((prev) => !prev);
    setIsModal2(true);
  };
  const handleCancel = () => {
    setIsModal((prev) => !prev);
  };
  // 모달2
  const handleOk2 = () => {
    setIsModal2((prev) => !prev);
  };
  const handleCancel2 = () => {
    setIsModal2((prev) => !prev);
  };
  const [updateUserPassword] = useMutation(UPDATE_USER_PASSWORD);
  const [updateSellerPassword] = useMutation(UPDATE_SELLER_PASSWORD);
  const onSubmitChangeUser = async (data: IData) => {
    try {
      const userPwd = await updateUserPassword({
        variables: {
          email,
          newPassword: data.password2,
        },
      });
      Modal.success({
        content:
          userPwd.data?.updateUserPassword.name +
          "님의 비밀번호가 변경되었습니다!",
      });
    } catch (e: any) {
      Modal.error({ content: e.message });
    }
  };
  const onSubmitChangeSeller = async (data: IData) => {
    try {
      const sellerPwd = await updateSellerPassword({
        variables: {
          email,
          newPassword: data.password2,
        },
      });

      Modal.success({
        content:
          sellerPwd.data?.updateSellerPassword.name +
          "님의 비밀번호가 변경되었습니다!",
      });
    } catch (e: any) {
      Modal.error({ content: e.message });
    }
  };

  // 인증하기
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [sendToken] = useMutation(SEND_TOKEN);
  const [checkToken] = useMutation(CHECK_TOKEN);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tokenSave, setTokenSave] = useState("");
  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const { data } = useQuery(FETCH_USER_BY_EMAIL, {
    variables: {
      email,
    },
  });
  useEffect(() => {
    setUserType(data?.fetchUserByEmail.type);
  }, [email]);

  const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setTokenSave(event.target.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onClickSend = async () => {
    if (phoneNumber === "" || phoneNumber.includes("-") === true) return;

    try {
      await sendToken({
        variables: {
          phone: phoneNumber,
        },
      });
    } catch (e: any) {
      Modal.success({ content: e.message });
    }
  };
  const onClickCheck = async () => {
    try {
      const Check = await checkToken({
        variables: {
          phone: phoneNumber,
          token: tokenSave,
        },
      });
      Modal.success({ content: Check.data?.checkToken });
      setIsCheck(true);
    } catch (e: any) {
      Modal.error({ content: e.message });
    }
  };
  const onClickSellerLogin = async (data: IData) => {
    if (isUser === "") {
      Modal.error({ content: "체크박스를 체크해주세요" });
      return;
    }
    try {
      const resultSeller = await loginSeller({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      setToken(resultSeller.data?.loginSeller);
      router.push(`/main`);
    } catch (e: any) {
      Modal.error({ content: e.message });
    }
  };
  const onClickLogin = async (data: IData) => {
    if (isUser === "") {
      Modal.error({ content: "체크박스를 체크해주세요" });

      return;
    }
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      router.push(`/main`);

      setToken(result.data?.loginUser);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  const onChangeAuth = (event: RadioChangeEvent) => {
    setIsUser(event.target.value);
  };
  formState.isValid;
  return (
    <LoginUI
      onSubmitChangeUser={onSubmitChangeUser}
      onSubmitChangeSeller={onSubmitChangeSeller}
      onChangePhone={onChangePhone}
      onChangeToken={onChangeToken}
      onChangeEmail={onChangeEmail}
      onClickSend={onClickSend}
      onClickCheck={onClickCheck}
      isModal={isModal}
      isModal2={isModal2}
      isCheck={isCheck}
      onClickModal={onClickModal}
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      onClickSellerLogin={onClickSellerLogin}
      register={register}
      onClickMove={onClickMove}
      onChangeAuth={onChangeAuth}
      isUser={isUser}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleOk2={handleOk2}
      handleCancel2={handleCancel2}
      formState={formState}
      userType={userType}
    />
  );
}
