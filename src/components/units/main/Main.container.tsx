import { useRef } from "react";
import MainUI from "./Main.presenter";

export default function Main() {
  const localRef = useRef<HTMLDivElement>(null);
  const onClickLocal = () => {
    localRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return <MainUI localRef={localRef} onClickLocal={onClickLocal} />;
}
