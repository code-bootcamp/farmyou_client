import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";

const Body = styled.div`
  width: 1200px;
`;

interface ILayoutProps {
  children: ReactNode;
}
const HIDDEN_HEADERS = ["/users/login", "/users/signup"];
const SHOW_BANNERS = ["/localfood", "/bfood"];
const HIDDEN_FOOTERS = [
  "/localfood",
  "/bfood",
  "/users/login",
  "/users/signup",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isShowBanner = SHOW_BANNERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {isShowBanner && <LayoutBanner />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
