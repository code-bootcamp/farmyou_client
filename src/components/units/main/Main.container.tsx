import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import MainUI from "./Main.presenter";

export default function Main() {
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();
  const localRef = useRef<HTMLDivElement>(null);
  const onClickLocal = () => {
    localRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setIsSearch(true);
    } else if (event.target.value === "") {
      setIsSearch(false);
    }
  };
  return (
    <MainUI
      onChangeSearch={onChangeSearch}
      onClickMove={onClickMove}
      localRef={localRef}
      onClickLocal={onClickLocal}
      isSearch={isSearch}
    />
  );
}
