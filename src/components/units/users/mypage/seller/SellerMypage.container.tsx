import { useRouter } from "next/router";
import { MouseEvent, useRef, useState } from "react";
import SellerMypageUI from "./SellerMypage.presenter";

export default function SellerMypage() {
  const router = useRouter();

  const [isSelect, setIsSelect] = useState(true);
  const trackingRef = useRef<HTMLFormElement>();

  const onClickLocalList = () => {
    setIsSelect(true);
  };

  const onClickBfoodList = () => {
    setIsSelect(false);
  };

  const onClickLocalDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/localfood/${event.currentTarget.id}`);
  };

  const onClickBfoodDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${event.currentTarget.id}`);
  };

  const onClickPostTracking = () => {
    trackingRef.current?.click();
    console.log(trackingRef);
  };

  return (
    <SellerMypageUI
      isSelect={isSelect}
      onClickLocalList={onClickLocalList}
      onClickBfoodList={onClickBfoodList}
      onClickLocalDetail={onClickLocalDetail}
      onClickBfoodDetail={onClickBfoodDetail}
      onClickPostTracking={onClickPostTracking}
      trackingRef={trackingRef}
    />
  );
}
