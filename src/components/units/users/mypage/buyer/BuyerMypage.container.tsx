import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  ASSIGN_MAIN,
  CHECK_IF_LOGGED_USER,
  DELETE_ADDRESS,
  FETCH_ADDRESSES_OF_THE_USER,
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./BuyerMypage.queries";
import BuyerMypageUI from "./BuyerMypage.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

export default function BuyerMypage() {
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
  const [updateUser] = useMutation(UPDATE_USER);
  const [assignMain] = useMutation(ASSIGN_MAIN);
  const [deleteAddress] = useMutation(DELETE_ADDRESS);
  const [checkIfLoggedUser] = useMutation(CHECK_IF_LOGGED_USER);

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(userData.fetchUserLoggedIn.id);
  const { data: userAddressData } = useQuery(FETCH_ADDRESSES_OF_THE_USER, {
    variables: {
      userId: userData?.fetchUserLoggedIn.id,
    },
  });
  // password
  const showPasswordModal = () => {
    setIsUserVisible(true);
  };
  const passwordCancel = () => {
    setIsUserVisible(false);
    setError("");
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };
  const onClickConfirm = async () => {
    try {
      const result = await checkIfLoggedUser({
        variables: {
          password,
        },
      });
      // console.log(result.data.checkIfLoggedUser);
      if (result.data.checkIfLoggedUser) {
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
      await updateUser({
        variables: {
          name: data.name,
          password: data.password,
          phone: data.phone,
          imageUrl: fileUrl,
        },
      });
      setIsEditVisible(false);
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
  const onClickDeleteAddress = async (event: any) => {
    try {
      await deleteAddress({
        variables: {
          id: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_ADDRESSES_OF_THE_USER,
            variables: {
              userId: userData?.fetchUserLoggedIn.id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
    console.log(event.target.id);
  };
  const onClickMainAddress = async (event: any) => {
    try {
      await assignMain({
        variables: {
          userId: userData?.fetchUserLoggedIn.id,
          addressId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_ADDRESSES_OF_THE_USER,
            variables: {
              userId: userData?.fetchUserLoggedIn.id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  };
  return (
    <BuyerMypageUI
      showEditModal={showEditModal}
      showPasswordModal={showPasswordModal}
      isUserVisible={isUserVisible}
      passwordCancel={passwordCancel}
      editCancel={editCancel}
      isEditVisible={isEditVisible}
      userAddressData={userAddressData}
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
      onClickDeleteAddress={onClickDeleteAddress}
      onClickMainAddress={onClickMainAddress}
    />
  );
}
