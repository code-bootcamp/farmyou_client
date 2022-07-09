import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface props {
  isCheck: boolean;
  scroll: boolean;
}
export const Body = styled.div`
  width: 100%;
  height: 100px;
  z-index: 100;
  background-color: ${(props: props) => (props.scroll ? "white" : "none")};
  border-bottom: ${(props: props) =>
    props.isCheck ? "1px solid white" : "3px solid #f6651e"};
  padding: 15px 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  color: ${(props: props) =>
    props.isCheck ? (props.scroll ? "#f6651e" : "white") : "black"};
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
export const MenuCart = styled.img`
  width: 40px;
  height: 40px;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const CHECK = ["/main"];
  const isCheck = CHECK.includes(router.asPath);

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
    <Body isCheck={isCheck} scroll={scroll}>
      <LogoImg
        src={
          scroll
            ? "/logo/boldo.png"
            : isCheck
            ? "/logo/boldw.png"
            : "/logo/boldb.png"
        }
      />
      <MenuWrapper>
        <MenuFunction>회원가입</MenuFunction>
        <MenuFunction>로그인</MenuFunction>
        {!isCheck && <MenuCart src="/icons/cart.png" />}
      </MenuWrapper>
    </Body>
  );
}
