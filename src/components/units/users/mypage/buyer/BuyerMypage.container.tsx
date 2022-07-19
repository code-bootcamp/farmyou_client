import { useState } from "react";
import BuyerMypageUI from "./BuyerMypage.presenter";

export default function BuyerMypage() {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <BuyerMypageUI
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isVisible={isVisible}
    />
  );
}
