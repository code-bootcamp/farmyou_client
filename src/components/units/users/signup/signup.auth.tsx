import styled from "@emotion/styled";
import { useState } from "react";
import Signup from "./signup.container";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img1 = styled.img`
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(291deg)
    brightness(107%) contrast(101%);
`;
const Img2 = styled.img`
  filter: invert(0%) sepia(100%) saturate(4%) hue-rotate(186deg) brightness(99%)
    contrast(100%);
`;
const Left = styled.div`
  width: 20rem;
  height: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #f5561e;
    color: #fff;
  }

  &:hover .Img1 {
    filter: invert(0%) sepia(100%) saturate(4%) hue-rotate(186deg)
      brightness(99%) contrast(100%);
  }
  @media (max-width: 700px) {
    width: 20rem;
    height: 15rem;
    margin: 0px 0px 20px 0px;
  }
`;
const Right = styled.div`
  width: 20rem;
  height: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #f5561e;
    color: #fff;
  }

  &:hover .Img2 {
    filter: invert(100%) sepia(5%) saturate(966%) hue-rotate(16deg)
      brightness(115%) contrast(100%);
  }
  @media (max-width: 700px) {
    width: 20rem;
    height: 15rem;
  }
`;
const SellectWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Text = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
export default function SignUpAuth() {
  const [isSellect, setIsSellect] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const onClickSellect = () => {
    setIsSellect(false);
  };
  const onClickSeller = () => {
    setIsSellect(false);
    setIsSeller(true);
  };
  return (
    <Wrapper>
      {isSellect && (
        <SellectWrapper>
          <Left onClick={onClickSellect}>
            <Img1
              className="Img1"
              src="/icons/user/signup/sellericon.png"
              alt=""
            />
            <Text>구매자 회원가입</Text>
          </Left>
          <Right onClick={onClickSeller}>
            <Img2
              className="Img2"
              src="/icons/user/signup/buyericon.png"
              alt=""
            />
            <Text>판매자 회원가입</Text>
          </Right>
        </SellectWrapper>
      )}
      {!isSellect && <Signup isSeller={isSeller} />}
    </Wrapper>
  );
}
