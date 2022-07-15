import { ChangeEvent, MouseEvent, useState } from "react";
import DetailUI from "./Detail.presenter";
import _ from "lodash";
import { IDetailProps } from "./Detail.types";

export default function Detail(props: IDetailProps) {
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

  return (
    <DetailUI
      data={props.data}
      onClickSubImage={onClickSubImage}
      mainImageSrc={mainImageSrc}
      onChangeBuyQuantity={onChangeBuyQuantity}
      buyQuantity={buyQuantity}
    ></DetailUI>
  );
}
