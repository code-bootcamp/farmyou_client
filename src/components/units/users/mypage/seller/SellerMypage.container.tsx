import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import SellerMypageUI from "./SellerMypage.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import {
  CHECK_IF_LOGGED_SELLER,
  FETCH_COMPLETED_PAYMENTS_FOR_SELLER,
  FETCH_UGLY_PRODUCTS_BY_SELLER,
  FETCH_USER_LOGGED_IN,
  UPDATE_INVOICE,
  UPDATE_SELLER,
  UPLOAD_FILE,
} from "./SellerMypage.queries";
import { useRouter } from "next/router";
import { IForm, ISellerMypageProps } from "./SellerMypage.types";

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
    invoice: yup.string(),
  });
  const { handleSubmit, register } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");
  const [sliceNumber, setSliceNumber] = useState(2);
  const [isSelect, setIsSelect] = useState(true);
  const [invoiceNum, setInvoiceNum] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateSeller] = useMutation(UPDATE_SELLER);
  const [checkIfLoggedSeller] = useMutation(CHECK_IF_LOGGED_SELLER);
  const [updateInvoice] = useMutation(UPDATE_INVOICE);

  const { data: fetchUglyProductsBySellerData } = useQuery(
    FETCH_UGLY_PRODUCTS_BY_SELLER
  );
  const { data, refetch: dataRefetch } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: fetchCompletedPaymentsForSellerData, refetch } = useQuery(
    FETCH_COMPLETED_PAYMENTS_FOR_SELLER,
    {
      variables: {
        sellerId: props.userData?.fetchUserLoggedIn?.id,
      },
    }
  );

  useEffect(() => {
    if (data?.fetchUserLoggedIn.files[0]) {
      setFileUrl(data?.fetchUserLoggedIn.files[0].url);
    }
  }, []);
  const onClickInvoiceEdit = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await updateInvoice({
        variables: {
          paymentId: event.currentTarget.id,
          invoiceNum,
        },
      });
      setInvoiceNum("");
      await refetch();
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickInvoiceRegistration = async () => {
    try {
      await updateInvoice({
        variables: {
          paymentId,
          invoiceNum,
        },
      });
      setInvoiceNum("");
      await refetch();
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onChangeInvoiceNum = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoiceNum(event.target.value);
  };

  const toggleModal = (event: MouseEvent<HTMLDivElement>) => {
    setIsModalVisible((prev) => !prev);
    setInvoiceNum("");
    setPaymentId(event.currentTarget.id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onClickInvoiceRegistration();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickSellingList = () => {
    setSliceNumber(2);
    setIsSelect(true);
  };

  const onClickPaymentList = () => {
    setSliceNumber(2);
    setIsSelect(false);
    setError("");
  };

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
    setPassword(event.target.value);
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
  const onClickEdit = async (data: IForm) => {
    try {
      await updateSeller({
        variables: {
          name: data.name,
          password: data.password,
          phone: data.phone,
          createFileInput: {
            imageUrl: String(fileUrl),
          },
        },
      });
      dataRefetch();
      setIsEditVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fileRef = useRef<HTMLInputElement>(null);

  function onClickUpload() {
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

  const onClickMoveToEditPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${event.currentTarget.id}/edit`);
  };
  const onClickDefaultFile = () => {
    setFileUrl("");
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
      // userData={props.userData}
      isSelect={isSelect}
      onClickSellingList={onClickSellingList}
      onClickPaymentList={onClickPaymentList}
      fetchCompletedPaymentsForSellerData={fetchCompletedPaymentsForSellerData}
      onClickMoveToEditPage={onClickMoveToEditPage}
      onClickInvoiceRegistration={onClickInvoiceRegistration}
      onClickInvoiceEdit={onClickInvoiceEdit}
      onChangeInvoiceNum={onChangeInvoiceNum}
      invoiceNum={invoiceNum}
      toggleModal={toggleModal}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      data={data}
      onClickDefaultFile={onClickDefaultFile}
    />
  );
}
