/* eslint-disable no-unused-expressions */
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SignupUI from "./signup.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  CHECK_TOKEN,
  CREATE_SELLER,
  CREATE_USER,
  SEND_TOKEN,
} from "./signup.queries";

export default function Signup(props: any) {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [createUser] = useMutation(CREATE_USER);
  const [createSeller] = useMutation(CREATE_SELLER);

  // 타이머
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isStart === false) return;
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, isStart]);

  // 핸드폰 번호 인증
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tokenSave, setTokenSave] = useState("");
  const [sendToken] = useMutation(SEND_TOKEN);
  const [checkToken] = useMutation(CHECK_TOKEN);
  const [isCheck, setIsCheck] = useState(false);
  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    console.log(phoneNumber);
  };
  const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setTokenSave(event.target.value);
  };

  const onClickSubmitToken = async () => {
    try {
      setIsStart((prev) => !prev);
      const tokenCheck = await checkToken({
        variables: {
          phone: phoneNumber,
          token: tokenSave,
        },
      });
      setIsCheck((prev) => !prev);
      console.log(tokenCheck);
    } catch (e: any) {
      alert(e.message);
    }
  };
  const onClickCheckPhone = async () => {
    try {
      if (phoneNumber === "" || phoneNumber.includes("-") === true) {
        alert("핸드폰 번호를 입력해주세요");
        return;
      }
      setIsStart((prev) => !prev);
      const phoneToken = await sendToken({
        variables: {
          phone: phoneNumber,
        },
      });
      console.log(phoneToken);
    } catch (e: any) {
      alert(e.message);
    }
  };
  // 회원가입
  const onClickCreateUser = async (data: any) => {
    if (!isCheck) return;

    try {
      const result = await createUser({
        variables: {
          email: data.email,
          name: data.name,
          password: data.password,
          phone: String(data.phone),
          addressUser: {
            address: data.address,
            detailedAddress: data.detailedAddress,
            postalCode: data.postalCode,
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
    if (!isCheck) return;
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
      isStart={isStart}
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
      onClickCheckPhone={onClickCheckPhone}
      onClickSubmitToken={onClickSubmitToken}
      onChangePhone={onChangePhone}
      onChangeToken={onChangeToken}
      minutes={minutes}
      seconds={seconds}
      isCheck={isCheck}
    />
  );
}
