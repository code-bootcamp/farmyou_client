import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import { LOG_IN } from "./login.queries";

export default function Login() {
  const [login] = useMutation(LOG_IN);
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });
  const onClickLogin = async (data: any) => {
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
          userType: "user",
        },
      });
      router.push(`/main`);
    } catch (error: any) {
      console.log(error);
    }
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  return (
    <LoginUI
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      register={register}
      onClickMove={onClickMove}
    />
  );
}
