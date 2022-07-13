import BfoodWriteUI from "./BfoodWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string().required(),
  price: yup.string().required(),
  quantity: yup.string().required(),
  area: yup.number().required(),
});

export default function BfoodWrite() {
  const router = useRouter();
  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("description", value === "<p><br></p>" ? "" : value);
    trigger("description");
  };

  const onClickToCancel = () => {
    router.push("/users/mypage");
  };
  // console.log(watch());
  return (
    <BfoodWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      onClickToCancel={onClickToCancel}
    />
  );
}
