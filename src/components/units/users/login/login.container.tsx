import { useMutation } from "@apollo/client";
import { RadioChangeEvent } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { TokenState } from "../../../commons/store";
import LoginUI from "./login.presenter";
import { LOG_IN_SELLER, LOG_IN_USER } from "./login.queries";
import { IData } from "./login.types";

export default function Login() {
  const [token, setToken] = useRecoilState(TokenState);
  const [loginUser] = useMutation(LOG_IN_USER);
  const [loginSeller] = useMutation(LOG_IN_SELLER);
  const [isUser, setIsUser] = useState("");
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onClickSellerLogin = async (data: IData) => {
    if (isUser === "") {
      alert("체크박스를 체크해주세요");
      return;
    }
    try {
      const resultSeller = await loginSeller({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(resultSeller);
      setToken(resultSeller.data?.loginSeller);
      router.push(`/main`);
    } catch (e: any) {
      alert(e.message);
    }
  };
  const onClickLogin = async (data: IData) => {
    if (isUser === "") {
      alert("체크박스를 체크해주세요");
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
      console.log(result);
      setToken(result.data?.loginUser);
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  const onChangeAuth = (event: RadioChangeEvent) => {
    setIsUser(event.target.value);
  };
  return (
    <LoginUI
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      onClickSellerLogin={onClickSellerLogin}
      register={register}
      onClickMove={onClickMove}
      onChangeAuth={onChangeAuth}
      isUser={isUser}
    />
  );
}
