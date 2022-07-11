import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface props {
  isCheck: boolean;
  isCheckList: boolean;
  scroll: boolean;
}
export const Body = styled.div`
  width: 100%;
  height: 100px;
  z-index: 100;
  background-color: ${(props: props) =>
    props.isCheckList ? (props.scroll ? "white" : "none") : "white"};
  border-bottom: ${(props: props) =>
    props.isCheck ? "1px solid white" : "none"};
  padding: 15px 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  color: ${(props: props) =>
    props.isCheckList ? (props.scroll ? "#f6651e" : "white") : "#f6651e"};
`;
export const LogoImg = styled.img`
  width: 15vw;
  min-width: 200px;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MenuFunction = styled.div`
  font-size: 20px;
  margin-right: 40px;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const CHECK = ["/main"];
  const isCheck = CHECK.includes(router.asPath);
  const CHECK_LIST = ["/main", "/localfood", "/bfood"];
  const isCheckList = CHECK_LIST.includes(router.asPath);

  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 10) {
      setScroll(true);
      // console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  return (
    <Body isCheckList={isCheckList} isCheck={isCheck} scroll={scroll}>
      <LogoImg
        src={
          isCheckList
            ? scroll
              ? "/logo/boldo.png"
              : "/logo/boldw.png"
            : "/logo/boldo.png"
        }
      />
      <MenuWrapper>
        <MenuFunction>회원가입</MenuFunction>
        <MenuFunction>로그인</MenuFunction>
        {!isCheck && <MenuFunction>장바구니</MenuFunction>}
      </MenuWrapper>
    </Body>
  );
}
