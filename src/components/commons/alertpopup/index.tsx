import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0px 10%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  @media (max-width: 689px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 450px;
  height: 550px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Icon = styled.img`
  margin-bottom: 30px;
`;
export const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
export const ChooseClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  width: 100%;
  height: 10%;
`;
export const OneDay = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;
export const Close = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export default function AlertPopUp() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const BEFORE = localStorage.getItem("mainVisitBefore") || "";
    const NOW = Math.floor(new Date().getDate());
    if (BEFORE === "") {
      setShowModal(true);
    } else {
      if (NOW >= Number(BEFORE)) {
        setShowModal(true);
        localStorage.removeItem("mainVisitBefore");
      } else {
        setShowModal(false);
      }
    }
  }, []);
  const onClickClose = () => {
    setShowModal(false);
  };
  const onClickTodayClose = () => {
    const expiry = new Date();
    const expiryDate: number = expiry.getDate() + 1;
    localStorage.setItem("mainVisitBefore", String(expiryDate));
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Body>
          <Wrapper>
            <Content>
              <Icon src="/popup/alert.png" />
              포트폴리오용으로 제작된 페이지입니다.
            </Content>
            <ChooseClose>
              <OneDay onClick={onClickTodayClose}>하루동안 열지 않기</OneDay>
              <Close onClick={onClickClose}>닫기</Close>
            </ChooseClose>
          </Wrapper>
        </Body>
      )}
    </>
  );
}
