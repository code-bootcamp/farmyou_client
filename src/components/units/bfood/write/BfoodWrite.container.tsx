import BfoodWriteUI from "./BfoodWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PRODUCT_UGLY,
  FETCH_USER_LOGGED_IN,
  UPDATE_PRODUCT_UGLY,
} from "./BfoodWrite.queries";
import { useEffect, useState } from "react";
import { IBfoodWriteProps, IData } from "./BfoodWrite.types";
import { Modal } from "antd";

const schema = yup.object({
  title: yup.string().required("필수입력사항입니다."),
  price: yup.number().required("필수입력사항입니다."),
  quantity: yup.number().required("필수입력사항입니다."),
  origin: yup.string().required("필수입력사항입니다."),
  content: yup.string().required("필수입력사항입니다."),
});

export default function BfoodWrite(props: IBfoodWriteProps) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [createProductUgly] = useMutation(CREATE_PRODUCT_UGLY);
  const [updateProductUgly] = useMutation(UPDATE_PRODUCT_UGLY);

  const { register, handleSubmit, setValue, trigger } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

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

  const onChangeContent = (value: string) => {
    setValue("content", value === "<p><br></p>" ? "" : value);
    trigger("content");
  };

  const onClickToCancel = () => {
    router.push("/users/mypage");
  };

  const onClickSubmit = async (data: IData) => {
    try {
      await createProductUgly({
        variables: {
          title: data.title,
          content: data.content,
          price: data.price,
          quantity: data.quantity,
          origin: data.origin,
          sellerId: userData.fetchUserLoggedIn.id,
          createFileInput: {
            imageUrl: fileUrls.join(","),
          },
        },
      });
      router.push("/bfood");
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickEdit = async (data: IData) => {
    try {
      updateProductUgly({
        variables: {
          productId: router.query.id,
          title: data.title,
          content: data.content,
          price: data.price,
          quantity: data.quantity,
          origin: data.origin,
          createFileInput: {
            imageUrl: fileUrls.join(","),
          },
        },
      });
      router.push(`/bfood/${router.query.id}`);
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  useEffect(() => {
    setFileUrls(
      props.fetchProductUglyData?.fetchProductUgly?.files[0].url?.split(",") ||
        []
    );
    onChangeContent(props.fetchProductUglyData?.fetchProductUgly?.content);
  }, []);

  // console.log(props.fetchProductUglyData);

  return (
    <BfoodWriteUI
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      onChangeContent={onChangeContent}
      onClickToCancel={onClickToCancel}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      fetchProductUglyData={props.fetchProductUglyData}
    />
  );
}
