import BfoodWriteUI from "./BfoodWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_UGLY } from "./BfoodWrite.queries";
import { useState } from "react";

const schema = yup.object({
  title: yup.string().required("필수입력사항입니다."),
  price: yup.number().required("필수입력사항입니다."),
  quantity: yup.number().required("필수입력사항입니다."),
  origin: yup.string().required("필수입력사항입니다."),
  content: yup.string().required("필수입력사항입니다."),
});

export default function BfoodWrite() {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState([]);
  const [createProductUgly] = useMutation(CREATE_PRODUCT_UGLY);
  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  function onChangeFiles(index: number, url: string) {
    // 기존 state들을 담아줍니다.
    const newFileUrls = [...fileUrls];
    // 세개의 버튼 중 이미 사진이 들어있는 곳을 클릭했다면 덮어씌워줍니다.
    if (newFileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      // 빈 곳이라면 맨 뒤에 추가해줍니다.
      newFileUrls.push(url);
    }
    // 변경된 배열을 state에 저장해줍니다.
    setFileUrls([...newFileUrls]);
  }
  console.log(fileUrls);

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
          files: fileUrls,
        },
      });
      console.log("등록완료");
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
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
    />
  );
}
