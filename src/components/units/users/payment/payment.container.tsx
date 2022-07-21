import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PaymentUI from "./payment.presenter";
import {
  // BUY_PRODUCT,
  CREATE_ADDRESS,
  CREATE_PAYMENT,
  FETCH_ADDRESSES_OF_THE_USER,
} from "./payment.queries";
import {
  IBaskets,
  IDaumPostcode,
  IFetchAddressOfTheUser,
  IPaymentProps,
} from "./payment.types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  IMP: any;
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
  phone: yup.string().required(),
  receiverName: yup
    .string()
    .max(7, "이름은 7자를 넘을 수 없습니다.")
    .required("이름을 입력해주세요"),
  receiverPhone: yup.string().required(),
  receiverPostalCode: yup.string().required(),
  receiverAddress: yup.string().required(),
  receiverAddressDetail: yup.string(),
});

export default function Payment(props: IPaymentProps) {
  // const router = useRouter();

  const { register, handleSubmit, setValue, trigger, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCart, setIsCart] = useState("");
  const [localfoodBaskets, setLocalfoodBaskets] = useState([]);
  const [bfoodBaskets, setBfoodBaskets] = useState([]);
  const [payProduct, setPayProduct] = useState({
    content: "",
    count: 1,
    createdAt: "",
    id: "c",
    origin: "",
    price: 0,
    quantity: 0,
    seller: {
      email: "",
      grade: "",
      id: "",
      like: 0,
      name: "",
      phone: "",
    },
    title: "",
  });
  const [localPrice, setLocalPrice] = useState(0);
  const [bPrice, setBPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [defaultValue, setDefaultValue] = useState<IFetchAddressOfTheUser>({});
  const [checked, setChecked] = useState(false);
  const [newAddress, setNewAddress] = useState(false);

  const [createPayment] = useMutation(CREATE_PAYMENT);
  const [createAddress] = useMutation(CREATE_ADDRESS);
  // const [buyProduct] = useMutation(BUY_PRODUCT);

  const { data, refetch } = useQuery(FETCH_ADDRESSES_OF_THE_USER, {
    variables: {
      userId: props.data?.fetchUserLoggedIn?.id,
    },
  });

  const onClickNewAddressRegistration = async () => {
    try {
      const result = await createAddress({
        variables: {
          address: getValues("newAddress"),
          detailedAddress: getValues("newDetailedAddress"),
          postalCode: getValues("newPostalCode"),
          userId: props.data?.fetchUserLoggedIn?.id,
          isMain: false,
        },
      });
      console.log(result);
      await refetch();
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    } finally {
      setValue("newPostalCode", "");
      setValue("newAddress", "");
      setValue("newDetailedAddress", "");
      trigger("newPostalCode");
      onClickNewAddressCancel();
    }
  };

  const toggleDaumPostCode = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: IDaumPostcode) => {
    setValue("newPostalCode", data.zonecode);
    setValue("newAddress", data.address);
    trigger("newPostalCode");

    toggleDaumPostCode();
  };

  const onClickNewAddressButton = () => {
    setNewAddress((prev) => !prev);
  };
  const onClickNewAddressCancel = () => {
    setNewAddress(false);
  };

  const onClickMainAddressSetting = (el: IFetchAddressOfTheUser) => () => {
    setDefaultValue(el);
    onClickModalCancel();
  };

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const onClickModalCancel = () => {
    toggleModal();
  };

  const onChangeCheckBox = (event: CheckboxChangeEvent) => {
    setChecked(event.target.checked);
  };

  const requestPay = () => {
    if (!checked) {
      Modal.error({
        content: "약관에 동의해주세요.",
      });
      return;
    }

    const IMP = window.IMP;
    IMP.init("imp52318572");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "결제",
        amount:
          isCart === "cart"
            ? localPrice + bPrice
            : payProduct.price * payProduct.count,
        buyer_email: getValues("email"),
        buyer_name: getValues("name"),
        buyer_tel: getValues("phone"),
        buyer_addr: getValues("address") + getValues("detailedAddress"),
        buyer_postcode: getValues("postalCode"),
        // 결제 완료 후 이동할 페이지
        m_redirect_url: "/users/mypage",
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          if (isCart === "cart") {
            bfoodBaskets.map(async (el: IBaskets) => {
              await createPayment({
                variables: {
                  impUid: rsp.imp_uid,
                  amount: rsp.paid_amount,
                  productType: "UGLY_PRODUCT",
                  productId: el.id,
                  quantity: el.count,
                },
              });
              // await buyProduct({
              //   variables: {
              //     productType: "UGLY_PRODUCT",
              //     productId: el.id,
              //     quantity: el.count,
              //   },
              // });
            });
            // localStorage.removeItem("bfoodBaskets");
            localfoodBaskets.map(async (el: IBaskets) => {
              await createPayment({
                variables: {
                  impUid: rsp.imp_uid,
                  amount: rsp.paid_amount,
                  productType: "DIRECT_PRODUCT",
                  productId: el.id,
                  quantity: el.count,
                },
              });
              // await buyProduct({
              //   variables: {
              //     productType: "DIRECT_PRODUCT",
              //     productId: el.id,
              //     quantity: el.count,
              //   },
              // });
            });
            // localStorage.removeItem("localfoodBaskets")
          } else {
            await createPayment({
              variables: {
                impUid: rsp.imp_uid,
                amount: rsp.paid_amount,
                productType:
                  isCart === "bfood" ? "UGLY_PRODUCT" : "DIRECT_PRODUCT",
                productId: payProduct.id,
                quantity: payProduct.count,
              },
            });
            // createPayment api안에서 buyProduct api가 다시 실행되는 것을 확인.
            // await buyProduct({
            //   variables: {
            //     productType:
            //       isCart === "bfood" ? "UGLY_PRODUCT" : "DIRECT_PRODUCT",
            //     productId: payProduct.id,
            //     quantity: payProduct.count,
            //   },
            // });
          }
          // router.push("/users/mypage");
          alert("결제성공");
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  useEffect(() => {
    setIsCart(sessionStorage.getItem("isCart") || "");
    setLocalfoodBaskets(
      JSON.parse(localStorage.getItem("localfoodbaskets") || "")
    );
    setBfoodBaskets(JSON.parse(localStorage.getItem("bfoodbaskets") || ""));
    setPayProduct(JSON.parse(localStorage.getItem("payProduct") || ""));
  }, []);

  useEffect(() => {
    const localfoodPrice = localfoodBaskets.map((el: IBaskets) => {
      return el.price * el.count;
    });
    const bfoodPrice = bfoodBaskets.map((el: IBaskets) => {
      return el.price * el.count;
    });

    setLocalPrice(
      localfoodPrice.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    );

    setBPrice(
      bfoodPrice.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    );
  }, [isCart]);

  useEffect(() => {
    const value = data?.fetchAddressesOfTheUser.filter(
      (el: IFetchAddressOfTheUser) => {
        return el.isMain === true;
      }
    );

    setDefaultValue({ ...value }[0]);
  }, [data]);

  useEffect(() => {
    setValue("email", defaultValue?.user?.email);
    setValue("name", defaultValue?.user?.name);
    setValue("phone", defaultValue?.user?.phone);
    setValue("receiverName", defaultValue?.user?.name);
    setValue("receiverPhone", defaultValue?.user?.phone);
    setValue("receiverPostalCode", defaultValue?.postalCode);
    setValue("receiverAddress", defaultValue?.address);
    setValue("receiverAddressDetail", defaultValue?.detailedAddress);
    trigger("email");
  }, [defaultValue]);

  return (
    <PaymentUI
      isCart={isCart}
      localfoodBaskets={localfoodBaskets}
      bfoodBaskets={bfoodBaskets}
      payProduct={payProduct}
      localPrice={localPrice}
      bPrice={bPrice}
      requestPay={requestPay}
      isVisible={isVisible}
      toggleModal={toggleModal}
      onClickModalCancel={onClickModalCancel}
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      defaultValue={defaultValue}
      onClickMainAddressSetting={onClickMainAddressSetting}
      onChangeCheckBox={onChangeCheckBox}
      onClickNewAddressButton={onClickNewAddressButton}
      newAddress={newAddress}
      onClickNewAddressCancel={onClickNewAddressCancel}
      toggleDaumPostCode={toggleDaumPostCode}
      isModalVisible={isModalVisible}
      handleComplete={handleComplete}
      onClickNewAddressRegistration={onClickNewAddressRegistration}
    />
  );
}
