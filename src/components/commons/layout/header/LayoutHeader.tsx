// import LayoutHeaderUI from "./LayoutHeader.presenter";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface props {
  isCheck: boolean;
}
export const Body = styled.div`
  width: 100%;
  height: 100px;
  z-index: 100;
  background-color: ${(props: props) => (props.isCheck ? "none" : "white")};
  border-bottom: ${(props: props) =>
    props.isCheck ? "none" : "3px solid #f6651e"};
  padding: 15px 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;
export const LogoImg = styled.div`
  width: 20vw;
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
  return (
    <Body isCheck={isCheck}>
      <LogoImg />
      <MenuWrapper>
        <MenuFunction>로그인</MenuFunction>
        {!isCheck && <MenuCart src="/icons/cart.png" />}
      </MenuWrapper>
    </Body>
  );
}
