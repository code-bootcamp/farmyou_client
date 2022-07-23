import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import RowCapsuleUI from "./rowCapsule.presenter";
import { IBaskets, IRowCapsuleProps } from "./rowCapsule.types";

export default function RowCapsule(props: IRowCapsuleProps) {
  const [count, setCount] = useState(props.foodEl?.count || 1);
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
  const onCliCkDeleteFood = (event: MouseEvent<HTMLDivElement>) => {
    // console.log(event.target.id);
    // console.log(event.currentTarget.id);
    if (event.currentTarget.id === "bfood") {
      const bFoodBaskets = JSON.parse(
        localStorage.getItem("bfoodbaskets") || "[]"
      );
      const tempBaskets = bFoodBaskets.filter(
        (el: IBaskets) => el.id !== event.currentTarget.id
      );
      props.setFoodBasketsCount(tempBaskets.length);
      localStorage.setItem("bfoodbaskets", JSON.stringify(tempBaskets));
    } else {
      const localFoodBaskets = JSON.parse(
        localStorage.getItem("localfoodbaskets") || "[]"
      );
      const tempBaskets = localFoodBaskets.filter(
        (el: IBaskets) => el.id !== event.currentTarget.id
      );
      props.setFoodBasketsCount(tempBaskets.length);
      localStorage.setItem("localfoodbaskets", JSON.stringify(tempBaskets));
    }
  };
  useEffect(() => {
    if (props.foodSums) {
      const temp = [...props.foodSums];
      temp.splice(props.index, 1, count * props.foodEl?.price);
      props.setFoodSums(temp);
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
      foodEl={props.foodEl}
      count={count}
      // setCount={setCount}
      onClickCountUp={onClickCountUp}
      onClickCountDown={onClickCountDown}
      onChangeCount={onChangeCount}
      onCliCkDeleteFood={onCliCkDeleteFood}
      id={props.id}
    />
  );
}
