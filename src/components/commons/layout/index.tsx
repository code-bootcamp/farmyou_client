import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
// import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader";

interface props {
  isCheck: boolean;
}

const Body = styled.div`
  width: 100%;
  margin: 0px auto;
  margin-top: ${(props: props) => (props.isCheck ? "0px" : "100px")};
`;

interface ILayoutProps {
  children: ReactNode;
}
const HIDDEN_HEADERS = ["/users/login", "/users/signup"];
// const SHOW_BANNERS = ["/localfood", "/bfood"];
const HIDDEN_FOOTERS = [
  "/localfood",
  "/bfood",
  "/users/login",
  "/users/signup",
];

const CHECK = [
  "/main",
  "/users/login",
  "/users/signup",
  "/localfood",
  "/bfood",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  // const isShowBanner = SHOW_BANNERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);
  const isCheck = CHECK.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {/* {isShowBanner && <LayoutBanner />} */}
      <Body isCheck={isCheck}>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
