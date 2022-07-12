import { ChangeEvent, MouseEvent, useState } from "react";
import DetailUI from "./Detail.presenter";
import _ from "lodash";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  contents: yup.string().required(),
});

export default function Detail() {
  const [mainImageSrc, setMainImageSrc] = useState("");
  const [buyQuantity, setBuyQuantity] = useState(0);

  const { register, handleSubmit, formState, setValue, trigger, watch } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    setMainImageSrc(event.currentTarget.src);
  };

  const onChangeBuyQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(Number(event.target.value));
  };

  const getDebounce = _.debounce((input: number) => {
    setBuyQuantity(input);
  }, 500);

  console.log(buyQuantity);

  return (
    <DetailUI
      onClickSubImage={onClickSubImage}
      mainImageSrc={mainImageSrc}
      onChangeBuyQuantity={onChangeBuyQuantity}
      buyQuantity={buyQuantity}
    ></DetailUI>
  );
}
