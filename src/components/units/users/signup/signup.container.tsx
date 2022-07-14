/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignupUI from "./signup.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_SELLER, CREATE_USER } from "./signup.queries";
export default function Signup(props: any) {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [timer, setTimer] = useState();
  const [createUser] = useMutation(CREATE_USER);
  const [createSeller] = useMutation(CREATE_SELLER);

  // interface IData {
  //   email: string;
  //   name: string;
  //   password: string;
  //   addressUser: {
  //     address: string;
  //     detailedAddress: string;
  //     postalCode: string;
  //   };
  // }
  const onClickCreateUser = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          email: data.email,
          name: data.name,
          password: data.password,
          phone: data.phone,
          addressUser: {
            address,
            detailedAddress,
            postalCode,
          },
        },
      });
      router.push(`/main`);
      console.log(result);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const onClickCreateSeller = async (data: any) => {
    try {
      const resultSeller = await createSeller({
        variables: {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: String(data.phone),
        },
      });
      console.log(resultSeller);
      router.push(`/main`);
    } catch (e: any) {
      alert(e.message);
    }
  };
  const schema = yup.object({
    email: yup
      .string()
      .matches(/^\w+@\w+\.\w+/, "이메일 형식이 맞지 않습니다.")
      .required("이메일을 입력해 주세요"),
    name: yup
      .string()
      .max(7, "이름은 7자를 넘을 수 없습니다.")
      .required("이름을 입력해주세요"),
    password: yup
      .string()
      .max(15, "비밀번호는 15자를 넘을 수 없습니다.")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영어,숫자,특수문자가 포함되어야 합니다."
      )
      .required("비밀번호를 입력해주세요"),
    passwordCheck: yup
      .string()
      .max(15, "비밀번호는 15자를 넘을 수 없습니다.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호를 다시 입력해주세요"),
  });

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickShowModal = () => {
    setIsModal((prev) => !prev);
  };

  // 다음 포스트

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress, data.zonecode); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setPostalCode(data.zonecode);
    setAddress(fullAddress);
    setIsModal((prev) => !prev);
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  formState.isValid;

  return (
    <SignupUI
      isSeller={props.isSeller}
      handleSubmit={handleSubmit}
      register={register}
      onClickShowModal={onClickShowModal}
      onClickCreateUser={onClickCreateUser}
      isModal={isModal}
      handleComplete={handleComplete}
      address={address}
      postalCode={postalCode}
      onClickMove={onClickMove}
      formState={formState}
      onClickCreateSeller={onClickCreateSeller}
    />
  );
}
