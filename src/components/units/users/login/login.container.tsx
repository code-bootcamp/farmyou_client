import { useMutation } from "@apollo/client";
import { RadioChangeEvent } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import { LOG_IN_SELLER, LOG_IN_USER } from "./login.queries";
import { IData } from "./login.types";

export default function Login() {
  const [loginUser] = useMutation(LOG_IN_USER);
  const [loginSeller] = useMutation(LOG_IN_SELLER);
  const [isUser, setIsUser] = useState(true);
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onClickSellerLogin = async (data: IData) => {
    try {
      const resultSeller = await loginSeller({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (e: any) {
      alert(e.message);
    }
  };
  const onClickLogin = async (data: IData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      router.push(`/main`);
    } catch (error: any) {
      console.log(error.message);
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
