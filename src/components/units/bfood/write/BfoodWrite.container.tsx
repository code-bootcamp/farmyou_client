import BfoodWriteUI from "./BfoodWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_UGLY } from "./BfoodWrite.queries";

const schema = yup.object({
  title: yup.string().required("필수입력사항입니다."),
  price: yup.number().required("필수입력사항입니다."),
  quantity: yup.number().required("필수입력사항입니다."),
  origin: yup.string().required("필수입력사항입니다."),
  content: yup.string().required("필수입력사항입니다."),
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
    // console.log(watch());
    // console.log(formState.isValid);
  };

  const onClickSubmit = async (data: any) => {
    try {
      await createProductUgly({
        variables: {
          title: data.title,
          content: data.content,
          price: data.price,
          quantity: data.quantity,
          origin: data.origin,
          sellerId: "0b152efe-736e-408d-afd8-3e320e0e94dd",
        },
      });
      // console.log(result);
      router.push("/bfood");
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
