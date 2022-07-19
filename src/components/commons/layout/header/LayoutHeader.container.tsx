import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TokenState } from "../../store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOG_OUT } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [token, setToken] = useRecoilState(TokenState);

  const [isIn, setIsIn] = useState(false);
  const CHECK = ["/main"];
  const isCheck = CHECK.includes(router.asPath);
  const CHECK_LIST = ["/main", "/localfood", "/bfood"];
  const isCheckList = CHECK_LIST.includes(router.asPath);
  const CHECK_BFOOD = ["/bfood"];
  const isCheckBFood = CHECK_BFOOD.includes(router.asPath);
  const [logout] = useMutation(LOG_OUT);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  const onClickLogout = async () => {
    const resultLogout = await logout();
    setToken("");
    console.log(data, resultLogout, token);
    router.push(`/main`);
  };
  // 스크롤이 10px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  const onClickToCart = () => {
    router.push("/users/cart");
  };
  const onClickMoveToSignup = () => {
    router.push(`/users/signup`);
  };
  const onClickMoveToLogin = () => {
    router.push(`/users/login`);
  };
  const onClickMoveToMypage = () => {
    router.push(`/users/mypage`);
  };
  const onCLickMoveToMain = () => {
    router.push(`/main`);
  };

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

  const onClickScroll = () => {
    window.scrollTo({ left: 0, top: 700, behavior: "smooth" });
  };

  // 장바구니 기능
  const dragAndDropBasket = (el: any) => {
    // 1.기존 장바구니 가져오기
    const baskets = JSON.parse(
      localStorage.getItem(
        isCheckBFood ? "bfoodbaskets" : "localfoodbaskets"
      ) || "[]"
    );
    console.log(baskets);
    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: any) => basketEl.id === el.id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }
    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem(
      isCheckBFood ? "bfoodbaskets" : "localfoodbaskets",
      JSON.stringify(baskets)
    );
  };

  const drop = (event: any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("object");
    // console.log(data);
    let temp = JSON.parse(data);
    temp = { ...temp, count: 1 };
    console.log(temp);
    dragAndDropBasket(temp);
    setIsIn(false);
  };
  const dragOver = (event: any) => {
    event.preventDefault();
    setIsIn(true);
    console.log("in");
  };
  const dragLeave = () => {
    setIsIn(false);
    console.log("leave");
  };

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: isCheckList ? (scroll ? "#373a47" : "white") : "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#f6651e",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0px",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      // background: "white",
      borderLeft: "1px solid black",
      paddingTop: "30px",
      fontSize: "1.15rem",
      width: "100%",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
  };

  return (
    <LayoutHeaderUI
      onClickMoveToMypage={onClickMoveToMypage}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickLogout={onClickLogout}
      onClickMoveToMain={onCLickMoveToMain}
      isIn={isIn}
      isCheck={isCheck}
      isCheckList={isCheckList}
      scroll={scroll}
      onClickScroll={onClickScroll}
      drop={drop}
      dragOver={dragOver}
      dragLeave={dragLeave}
      styles={styles}
      onClickToCart={onClickToCart}
      data={data}
    />
  );
}
