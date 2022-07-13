import BfoodWriteUI from "./BfoodWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_UGLY } from "./BfoodWrite.queries";

const schema = yup.object({
  name: yup.string().required(),
  price: yup.string().required(),
  quantity: yup.string().required(),
  area: yup.number().required(),
});

export default function BfoodWrite() {
  const router = useRouter();
  const [createProductUgly] = useMutation(CREATE_PRODUCT_UGLY);
  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContent = (value: string) => {
    setValue("content", value === "<p><br></p>" ? "" : value);
    trigger("content");
  };

  const onClickToCancel = () => {
    router.push("/users/mypage");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createProductUgly({
        variables: {
          title: data.title,
          content: data.content,
          price: data.price,
          quantity: data.quantity,
          origin: data.origin,
          sellerId: "cfd4d744-0cf2-444f-9513-9bed0d96b19d",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(watch());
  return (
    <BfoodWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onChangeContent={onChangeContent}
      onClickToCancel={onClickToCancel}
      onClickSubmit={onClickSubmit}
    />
  );
}
