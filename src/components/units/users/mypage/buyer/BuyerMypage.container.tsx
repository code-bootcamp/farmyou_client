import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import {
  ASSIGN_MAIN,
  CHECK_IF_LOGGED_USER,
  DELETE_ADDRESS,
  FETCH_ADDRESSES_OF_THE_USER,
  FETCH_CANCELED_PAYMENTS,
  FETCH_COMPLETE_PAYMENTS,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./BuyerMypage.queries";
import BuyerMypageUI from "./BuyerMypage.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  IBuyerMypageProps,
  IFetchCompletePayments,
  IOnClickEdit,
} from "./BuyerMypage.types";

export default function BuyerMypage(props: IBuyerMypageProps) {
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
  const [updateUser] = useMutation(UPDATE_USER);
  const [assignMain] = useMutation(ASSIGN_MAIN);
  const [deleteAddress] = useMutation(DELETE_ADDRESS);
  const [checkIfLoggedUser] = useMutation(CHECK_IF_LOGGED_USER);
  const [isSelect, setIsSelect] = useState(true);
  const trackingRef = useRef<HTMLFormElement | undefined>();
  const [completePaymentsLocal, setCompletePaymentsLocal] = useState();
  const [completePaymentsUgly, setCompletePaymentsUgly] = useState();
  const [canceledPaymentsLocal, setCanceledPaymentsLocal] = useState();
  const [canceledPaymentsUgly, setCanceledPaymentsUgly] = useState();
  const [sliceNumber, setSliceNumber] = useState(2);

  const { data: userAddressData } = useQuery(FETCH_ADDRESSES_OF_THE_USER, {
    variables: {
      userId: props.userData?.fetchUserLoggedIn.id,
    },
  });

  console.log(userAddressData);

  const { data: fetchCompletePaymentsData } = useQuery(FETCH_COMPLETE_PAYMENTS);
  const { data: fetchCanceledPaymentsData } = useQuery(FETCH_CANCELED_PAYMENTS);

  const onClickFetchMore = () => {
    setSliceNumber((prev) => prev + 2);
  };

  useEffect(() => {
    setCompletePaymentsLocal(
      fetchCompletePaymentsData?.fetchCompletePayments.filter(
        (el: IFetchCompletePayments) => {
          return el.productDirect !== null;
        }
      )
    );
    setCompletePaymentsUgly(
      fetchCompletePaymentsData?.fetchCompletePayments.filter(
        (el: IFetchCompletePayments) => {
          return el.productUgly !== null;
        }
      )
    );
  }, [fetchCompletePaymentsData]);

  useEffect(() => {
    setCanceledPaymentsLocal(
      fetchCanceledPaymentsData?.fetchCanceledPayments.filter(
        (el: IFetchCompletePayments) => {
          return el.productDirect !== null;
        }
      )
    );
    setCanceledPaymentsUgly(
      fetchCanceledPaymentsData?.fetchCanceledPayments.filter(
        (el: IFetchCompletePayments) => {
          return el.productUgly !== null;
        }
      )
    );
  }, [fetchCanceledPaymentsData]);

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
  };

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
  const onClickEdit = async (data: IOnClickEdit) => {
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
  const onClickDeleteAddress = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await deleteAddress({
        variables: {
          id: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_ADDRESSES_OF_THE_USER,
            variables: {
              userId: props.userData?.fetchUserLoggedIn.id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  };
  const onClickMainAddress = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await assignMain({
        variables: {
          userId: props.userData?.fetchUserLoggedIn.id,
          addressId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_ADDRESSES_OF_THE_USER,
            variables: {
              userId: props.userData?.fetchUserLoggedIn.id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  };

  const onClickProductEditButton = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${event.currentTarget.id}/edit`);
  };

  return (
    <BuyerMypageUI
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
      userData={props.userData}
      completePaymentsLocal={completePaymentsLocal}
      completePaymentsUgly={completePaymentsUgly}
      canceledPaymentsLocal={canceledPaymentsLocal}
      canceledPaymentsUgly={canceledPaymentsUgly}
      sliceNumber={sliceNumber}
      onClickFetchMore={onClickFetchMore}
      onClickProductEditButton={onClickProductEditButton}
    />
  );
}
