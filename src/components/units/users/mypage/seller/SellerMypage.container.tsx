import { ChangeEvent, useRef, useState } from "react";
import SellerMypageUI from "./SellerMypage.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import {
  CHECK_IF_LOGGED_SELLER,
  FETCH_UGLY_PRODUCTS_BY_SELLER,
  UPDATE_SELLER,
  UPLOAD_FILE,
} from "./SellerMypage.queries";
import { useRouter } from "next/router";
import { IOnClickEdit, ISellerMypageProps } from "./SellerMypage.types";

export default function SellerMypage(props: ISellerMypageProps) {
  const router = useRouter();
  const schema = yup.object({
    name: yup.string().max(7, "이름은 7자를 넘을 수 없습니다."),
    password: yup
      .string()
      .max(15, "비밀번호는 15자를 넘을 수 없습니다.")
      .nullable(true)
      .matches(
        /^$|^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영어,숫자,특수문자가 포함되어야 합니다."
      ),
  });
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateSeller] = useMutation(UPDATE_SELLER);
  const [checkIfLoggedSeller] = useMutation(CHECK_IF_LOGGED_SELLER);
  const [sliceNumber, setSliceNumber] = useState(2);

  const { data: fetchUglyProductsBySellerData } = useQuery(
    FETCH_UGLY_PRODUCTS_BY_SELLER
  );

  const onClickFetchMore = () => {
    setSliceNumber((prev) => prev + 2);
  };

  // password
  const showPasswordModal = () => {
    setIsUserVisible(true);
  };
  const passwordCancel = () => {
    setIsUserVisible(false);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };
  const onClickConfirm = async () => {
    try {
      const result = await checkIfLoggedSeller({
        variables: {
          password,
        },
      });
      if (result.data.checkIfLoggedSeller) {
        setIsUserVisible(false);
        setIsEditVisible(true);
        setError("");
      } else {
        setError("비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // edit
  const showEditModal = () => {
    setIsEditVisible(true);
  };
  const editCancel = () => {
    setIsEditVisible(false);
  };
  const onClickEdit = async (data: IOnClickEdit) => {
    try {
      const result = await updateSeller({
        variables: {
          name: data.name,
          password: data.password,
          phone: data.phone,
          imageUrl: fileUrl,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const fileRef = useRef<HTMLInputElement>(null);

  function onClickUpload() {
    // console.log(props.fileUrls);
    fileRef.current?.click();
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({
        variables: {
          files: file,
        },
      });
      setFileUrl(result.data.uploadFile[0]);
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  };
  const onClickToWrite = () => {
    router.push(`/bfood/write`);
  };
  return (
    <SellerMypageUI
      showEditModal={showEditModal}
      showPasswordModal={showPasswordModal}
      isUserVisible={isUserVisible}
      passwordCancel={passwordCancel}
      editCancel={editCancel}
      isEditVisible={isEditVisible}
      onChangePassword={onChangePassword}
      onClickConfirm={onClickConfirm}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
      fileRef={fileRef}
      fileUrl={fileUrl}
      handleSubmit={handleSubmit}
      register={register}
      onClickEdit={onClickEdit}
      error={error}
      onClickToWrite={onClickToWrite}
      fetchUglyProductsBySellerData={fetchUglyProductsBySellerData}
      onClickFetchMore={onClickFetchMore}
      sliceNumber={sliceNumber}
      userData={props.userData}
    />
  );
}
