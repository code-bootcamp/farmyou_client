import { ChangeEvent, MouseEvent, useState } from "react";
import DetailUI from "./Detail.presenter";
import _ from "lodash";
import { IDetailProps } from "./Detail.types";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function Detail(props: IDetailProps) {
  const router = useRouter();
  const isCheckBFood = ["/bfood/[id]"].includes(router.pathname);
  const [mainImageSrc, setMainImageSrc] = useState("");
  const [buyQuantity, setBuyQuantity] = useState(0);

  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    setMainImageSrc(event.currentTarget.src);
  };

  const onChangeBuyQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(Number(event.target.value));
  };

  const getDebounce = _.debounce((input: number) => {
    setBuyQuantity(input);
  }, 500);

  // 장바구니 기능
  const onClickBasketsButton = () => {
    // 1.기존 장바구니 가져오기
    const baskets = JSON.parse(
      localStorage.getItem(
        isCheckBFood ? "bfoodbaskets" : "localfoodbaskets"
      ) || "[]"
    );

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter(
      (basketEl: any) => basketEl.id === props.data.id
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

  return (
    <DetailUI
      data={props.data}
      onClickSubImage={onClickSubImage}
      mainImageSrc={mainImageSrc}
      onChangeBuyQuantity={onChangeBuyQuantity}
      buyQuantity={buyQuantity}
      onClickBasketsButton={onClickBasketsButton}
    ></DetailUI>
  );
}
