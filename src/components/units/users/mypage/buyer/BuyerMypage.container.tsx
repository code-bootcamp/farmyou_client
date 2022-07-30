import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import {
  ASSIGN_MAIN,
  CANCEL_PAYMENT,
  CHECK_IF_LOGGED_USER,
  DELETE_ADDRESS,
  FETCH_ADDRESSES_OF_THE_USER,
  FETCH_CANCELED_PAYMENTS_OF_USER,
  FETCH_COMPLETED_PAYMENTS_OF_USER,
  FETCH_USER_LOGGED_IN,
  LOG_OUT,
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
  IFetchCanceledPayments,
  IFetchCompletePayments,
  IForm,
  IOnClickEdit,
} from "./BuyerMypage.types";
import axios from "axios";
import { TokenState } from "../../../../commons/store";
import { useSetRecoilState } from "recoil";

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

export default function BuyerMypage(props: IBuyerMypageProps) {
  const router = useRouter();

  const setToken = useSetRecoilState(TokenState);

  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");
  const [isSelect, setIsSelect] = useState(true);
  const [completePaymentsLocal, setCompletePaymentsLocal] = useState([]);
  const [completePaymentsUgly, setCompletePaymentsUgly] = useState([]);
  const [canceledPaymentsLocal, setCanceledPaymentsLocal] = useState([]);
  const [canceledPaymentsUgly, setCanceledPaymentsUgly] = useState([]);
  const [sliceNumber, setSliceNumber] = useState(2);
  const [invoiceCount, setInvoiceCount] = useState(0);
  const [payOrCancel, setPayOrCancel] = useState("pay");

  const fileRef = useRef<HTMLInputElement>(null);
  const trackingRef = useRef<HTMLFormElement | undefined>();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateUser] = useMutation(UPDATE_USER);
  const [assignMain] = useMutation(ASSIGN_MAIN);
  const [deleteAddress] = useMutation(DELETE_ADDRESS);
  const [checkIfLoggedUser] = useMutation(CHECK_IF_LOGGED_USER);
  const [cancelPayment] = useMutation(CANCEL_PAYMENT);
  const [logout] = useMutation(LOG_OUT);

  const { handleSubmit, register } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { data: userAddressData } = useQuery(FETCH_ADDRESSES_OF_THE_USER, {
    variables: {
      userId: props.userData?.fetchUserLoggedIn.id,
    },
  });
  const { data: fetchCompletePaymentsData, refetch } = useQuery(
    FETCH_COMPLETED_PAYMENTS_OF_USER,
    {
      variables: {
        userId: props.userData?.fetchUserLoggedIn.id,
      },
    }
  );
  const { data: fetchCanceledPaymentsData } = useQuery(
    FETCH_CANCELED_PAYMENTS_OF_USER,
    {
      variables: {
        userId: props.userData?.fetchUserLoggedIn.id,
      },
    }
  );
  const { data, refetch: dataRefetch } = useQuery(FETCH_USER_LOGGED_IN);

  const fetchCompletePaymentsCount =
    fetchCompletePaymentsData?.fetchCompletedPaymentsOfUser?.length;
  const fetchCanceledPaymentsCount =
    fetchCanceledPaymentsData?.fetchCanceledPaymentsOfUser?.length;
  const fetchCompletedPaymentsLocalCount = completePaymentsLocal?.length;
  const fetchCompletePaymentsUglyCount = completePaymentsUgly?.length;
  const fetchCanceledPaymentsLocalCount = canceledPaymentsLocal?.length;
  const fetchCanceledPaymentsUglyCount = canceledPaymentsUgly?.length;

  const onClickFetchMore = () => {
    setSliceNumber((prev) => prev + 2);
  };

  useEffect(() => {
    setCompletePaymentsLocal(
      fetchCompletePaymentsData?.fetchCompletedPaymentsOfUser.filter(
        (el: IFetchCompletePayments) => {
          return el.productDirect !== null;
        }
      )
    );
    setCompletePaymentsUgly(
      fetchCompletePaymentsData?.fetchCompletedPaymentsOfUser.filter(
        (el: IFetchCompletePayments) => {
          return el.productUgly !== null;
        }
      )
    );
    setInvoiceCount(
      fetchCompletePaymentsData?.fetchCompletedPaymentsOfUser.filter(
        (el: IFetchCompletePayments) => {
          return el.invoice !== null;
        }
      ).length
    );
  }, [fetchCompletePaymentsData]);

  useEffect(() => {
    setCanceledPaymentsLocal(
      fetchCanceledPaymentsData?.fetchCanceledPaymentsOfUser.filter(
        (el: IFetchCanceledPayments) => {
          return el.productDirect !== null;
        }
      )
    );
    setCanceledPaymentsUgly(
      fetchCanceledPaymentsData?.fetchCanceledPaymentsOfUser.filter(
        (el: IFetchCanceledPayments) => {
          return el.productUgly !== null;
        }
      )
    );
  }, [fetchCanceledPaymentsData]);

  useEffect(() => {
    if (data?.fetchUserLoggedIn.files[0]) {
      setFileUrl(data?.fetchUserLoggedIn.files[0].url);
    }
  }, []);

  const onClickPay = () => {
    setPayOrCancel("pay");
  };

  const onClickCancel = () => {
    setPayOrCancel("cancel");
  };

  const onClickLocalList = () => {
    setSliceNumber(2);
    setIsSelect(true);
  };

  const onClickBfoodList = () => {
    setSliceNumber(2);
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
      if (result.data.checkIfLoggedUser) {
        setIsUserVisible(false);
        setIsEditVisible(true);
        setError("");
      } else {
        setError("비밀번호가 틀렸습니다.");
      }
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
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
          createFileInput: {
            imageUrl: String(fileUrl),
          },
        },
      });
      dataRefetch();
      setIsEditVisible(false);
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

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
    } catch (error: any) {
      Modal.error({ content: error.message });
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
    } catch (error: any) {
      Modal.error({ content: error.message });
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
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickProductEditButton = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${event.currentTarget.id}/edit`);
  };

  const onClickCancelPayment =
    (el: IFetchCanceledPayments) =>
    async (event: MouseEvent<HTMLDivElement>) => {
      try {
        await cancelPayment({
          variables: {
            paymentId: event.currentTarget.id,
          },
        });
        await axios({
          url: "https://farmyou.shop/users/mypage",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            imp_uid: el.impUid, // 주문번호
            cancel_request_amount: el.amount, // 환불금액
            reason: "테스트 결제 환불", // 환불사유
          },
        });
        await refetch();
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    };
  const onClickDefaultFile = () => {
    setFileUrl("");
  };

  const onClickLogout = async () => {
    try {
      await logout();
      setToken("");
      router.push(`/`);
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
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
      completePaymentsLocal={completePaymentsLocal}
      completePaymentsUgly={completePaymentsUgly}
      canceledPaymentsLocal={canceledPaymentsLocal}
      canceledPaymentsUgly={canceledPaymentsUgly}
      sliceNumber={sliceNumber}
      onClickFetchMore={onClickFetchMore}
      onClickProductEditButton={onClickProductEditButton}
      fetchCompletePaymentsCount={fetchCompletePaymentsCount}
      fetchCanceledPaymentsCount={fetchCanceledPaymentsCount}
      fetchCompletedPaymentsLocalCount={fetchCompletedPaymentsLocalCount}
      fetchCompletePaymentsUglyCount={fetchCompletePaymentsUglyCount}
      fetchCanceledPaymentsLocalCount={fetchCanceledPaymentsLocalCount}
      fetchCanceledPaymentsUglyCount={fetchCanceledPaymentsUglyCount}
      onClickCancelPayment={onClickCancelPayment}
      invoiceCount={invoiceCount}
      payOrCancel={payOrCancel}
      onClickPay={onClickPay}
      onClickCancel={onClickCancel}
      data={data}
      onClickDefaultFile={onClickDefaultFile}
      onClickLogout={onClickLogout}
    />
  );
}
