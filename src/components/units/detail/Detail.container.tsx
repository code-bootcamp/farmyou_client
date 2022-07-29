import { ChangeEvent, MouseEvent, useState } from "react";
import DetailUI from "./Detail.presenter";
import _ from "lodash";
import { IBaskets, IDetailProps } from "./Detail.types";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function Detail(props: IDetailProps) {
  const router = useRouter();
  const isCheckBFood = ["/bfood/[id]"].includes(router.pathname);
  const [mainImageSrc, setMainImageSrc] = useState(
    props.data.files[0]?.url.split(",")[0]
  );
  const [buyQuantity, setBuyQuantity] = useState(0);

  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    setMainImageSrc(event.currentTarget.id);
  };

  const onChangeBuyQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(Number(event.target.value));
  };

  const getDebounce = _.debounce((input: number) => {
    setBuyQuantity(input);
  }, 500);

  // 장바구니 기능
  const onClickBasketsButton = () => {
    // buyQuantity가 0이면 장바구니 코드 실행 막기
    if (buyQuantity === 0) {
      Modal.error({
        content: "구매 수량을 입력해주세요.",
      });
      return;
    }

    // 1.기존 장바구니 가져오기
    const baskets = JSON.parse(
      localStorage.getItem(
        isCheckBFood ? "bfoodbaskets" : "localfoodbaskets"
      ) || "[]"
    );

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter(
      (basketEl: IBaskets) => basketEl.id === props.data.id
    );

    if (temp.length === 1) {
      Modal.error({
        content: "이미 담으신 상품입니다.",
      });
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = props.data;

    const basket = { ...newEl, count: buyQuantity };

    baskets.push(basket);

    localStorage.setItem(
      isCheckBFood ? "bfoodbaskets" : "localfoodbaskets",
      JSON.stringify(baskets)
    );

    Modal.success({
      content: "장바구니에 추가되었습니다.",
    });
  };

  const onClickBuyButton = () => {
    if (buyQuantity === 0) {
      Modal.error({
        content: "구매 수량을 입력해주세요.",
      });
      return;
    }

    const buy = { ...props.data, count: buyQuantity };

    localStorage.setItem("payProduct", JSON.stringify(buy));
    sessionStorage.setItem("isCart", "pay");

    router.push("/users/payment");
  };

  return (
    <DetailUI
      data={props.data}
      onClickSubImage={onClickSubImage}
      mainImageSrc={mainImageSrc}
      onChangeBuyQuantity={onChangeBuyQuantity}
      buyQuantity={buyQuantity}
      onClickBasketsButton={onClickBasketsButton}
      onClickBuyButton={onClickBuyButton}
    ></DetailUI>
  );
}
