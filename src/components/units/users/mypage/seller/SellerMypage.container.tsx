import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import SellerMypageUI from "./SellerMypage.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  CHECK_IF_LOGGED_SELLER,
  UPDATE_SELLER,
  UPLOAD_FILE,
} from "./SellerMypage.queries";

export default function SellerMypage() {
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
  const router = useRouter();
  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateSeller] = useMutation(UPDATE_SELLER);
  const [checkIfLoggedSeller] = useMutation(CHECK_IF_LOGGED_SELLER);
  const [isSelect, setIsSelect] = useState(true);
  const trackingRef = useRef<HTMLFormElement>();

  const onClickLocalList = () => {
    setIsSelect(true);
  };

  const onClickBfoodList = () => {
    setIsSelect(false);
    setError("");
  };

  const onClickLocalDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/localfood/${event.currentTarget.id}`);
  };

  const onClickBfoodDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${event.currentTarget.id}`);
  };

  const onClickPostTracking = () => {
    trackingRef.current?.click();
    console.log(trackingRef);
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
  const onClickEdit = async (data: any) => {
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
  const fileRef = useRef(null);

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
  return (
    <SellerMypageUI
      isSelect={isSelect}
      onClickLocalList={onClickLocalList}
      onClickBfoodList={onClickBfoodList}
      onClickLocalDetail={onClickLocalDetail}
      onClickBfoodDetail={onClickBfoodDetail}
      onClickPostTracking={onClickPostTracking}
      trackingRef={trackingRef}
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
    />
  );
}
