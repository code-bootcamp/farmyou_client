import _ from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import MainUI from "./Main.presenter";

// window 에 kakao 추가하기
declare const window: typeof globalThis & {
  kakao: any;
};

export default function Main() {
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [listData, setListData] = useState([]);
  const router = useRouter();
  const localRef = useRef<HTMLDivElement>(null);

  const onClickLocal = () => {
    localRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  const Debouncing = _.debounce((search: any) => {
    setKeyword(search);
  }, 1000);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setIsSearch(true);
      Debouncing(event.target.value);
    } else if (event.target.value === "") {
      setIsSearch(false);
      Debouncing(event.target.value);
    }
  };

  // 로컬푸드 직매장 검색하기
  // 834022f7a11709f54649f796dc004e21 카카오 자바스크립트 키
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=834022f7a11709f54649f796dc004e21&autoload=false&libraries=services,clusterer,drawing";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const places = new window.kakao.maps.services.Places();

        const callback = function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            setListData(result.slice(0, 3));
          }
        };

        places.keywordSearch(keyword + "로컬푸드 직매장", callback);
      });
    };
  }, [keyword]);

  return (
    <MainUI
      onChangeSearch={onChangeSearch}
      onClickMove={onClickMove}
      localRef={localRef}
      onClickLocal={onClickLocal}
      isSearch={isSearch}
      listData={listData}
    />
  );
}
