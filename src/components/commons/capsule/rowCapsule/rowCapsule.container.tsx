import { ChangeEvent, useEffect, useState } from "react";
import RowCapsuleUI from "./rowCapsule.presenter";

export default function RowCapsule(props: any) {
  const [count, setCount] = useState(props.bFoodEl?.count || 1);

  const onClickCountUp = () => {
    setCount((prev: number) => prev + 1);
  };
  const onClickCountDown = () => {
    if (count === 1) {
      return;
    }
    setCount((prev: number) => prev - 1);
  };
  const onChangeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };
  const onCliCkDeleteBfood = (event: any) => {
    const bFoodBaskets = JSON.parse(
      localStorage.getItem("bfoodbaskets") || "[]"
    );
    const tempBaskets = bFoodBaskets.filter(
      (el: any) => el.id !== event.target.id
    );
    props.setBfoodBasketsCount(tempBaskets.length);
    localStorage.setItem("bfoodbaskets", JSON.stringify(tempBaskets));
  };
  useEffect(() => {
    if (props.bFoodSums) {
      const temp = [...props.bFoodSums];
      temp.splice(props.index, 1, count * props.bFoodEl?.price);
      props.setBFoodSums(temp);
      // console.log(temp);
    }
    // const a1 = JSON.stringify(props.bFoodSums);
    // console.log(a1);
    // const a2 = JSON.parse(a1);
    // console.log(a2);
    // const temp = JSON.parse(JSON.stringify(props.bFoodSums));
    // const temp = [...props.bFoodSums];
    // temp.splice(props.index, 1, count * props.bFoodEl?.price);
    // console.log(temp);
    // props.bFoodSums[props.index] = count * props.bFoodEl?.price;
  }, [count]);

  return (
    <RowCapsuleUI
      bFoodEl={props.bFoodEl}
      count={count}
      setCount={setCount}
      onClickCountUp={onClickCountUp}
      onClickCountDown={onClickCountDown}
      onChangeCount={onChangeCount}
      onCliCkDeleteBfood={onCliCkDeleteBfood}
    />
  );
}
