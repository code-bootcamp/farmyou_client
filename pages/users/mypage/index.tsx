import BuyerMypage from "../../../src/components/units/users/mypage/buyer/BuyerMypage.container";
import SellerMypage from "../../../src/components/units/users/mypage/seller/SellerMypage.container";
import styled from "@emotion/styled";
import { Switch } from "antd";
import { useState } from "react";

const HeaderWrapper = styled.div`
  padding: 50px 10% 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MessageBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #809497;
  padding: 10px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.img`
  width: 20px;
  height: 25px;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const ToggleWrapper = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ToggleSwitch = styled(Switch)`
  background-color: #f6651e;
  margin-left: 1vw;
`;

export default function MypagePage() {
  const [isCheck, setIsCheck] = useState(false);

  const onClickChangeBuyerSeller = () => {
    setIsCheck((prev) => !prev);
  };

  return (
    <>
      <MessageBox>
        빠른 가입으로 잔여농산물 판매자가 되어보세요!
        <Icon src="/icons/mypage/cancel.png" />
      </MessageBox>
      <HeaderWrapper>
        <Header>
          {isCheck || "마이 페이지"}
          {isCheck && "판매자 페이지"}
        </Header>
        <ToggleWrapper>
          {isCheck || "판매자로 전환"}
          {isCheck && "구매자로 전환"}
          <ToggleSwitch
            defaultChecked={false}
            onClick={onClickChangeBuyerSeller}
          />
        </ToggleWrapper>
      </HeaderWrapper>
      {isCheck && <BuyerMypage />}
      {isCheck || <SellerMypage />}
    </>
  );
}
