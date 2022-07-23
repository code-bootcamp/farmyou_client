import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import RowCapsuleUI from "./rowCapsule.presenter";
import { IBaskets, IRowCapsuleProps } from "./rowCapsule.types";

export default function RowCapsule(props: IRowCapsuleProps) {
  const [count, setCount] = useState(props.foodEl?.count || 1);
  const onClickCountUp = () => {
    setCount((prev: number) => prev + 1);
    // const baskets = JSON.parse(
    //   localStorage.getItem(
    //     props.id === "bfood" ? "bfoodbaskets" : "localfoodbaskets"
    //   ) || "[]"
    // );
    // baskets[props.index].count = baskets[props.index].count + 1;
    // console.log(baskets[props.index]);
  };
  const onClickCountDown = () => {
    if (count === 1) {
      return;
    }
    setCount((prev: number) => prev - 1);
    // const baskets = JSON.parse(
    //   localStorage.getItem(
    //     props.id === "bfood" ? "bfoodbaskets" : "localfoodbaskets"
    //   ) || "[]"
    // );
    // baskets[props.index].count = baskets[props.index].count - 1;
    // console.log(baskets[props.index].count);
  };
  const onChangeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };
  const onCliCkDeleteFood = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    // console.log(event.target.id);
    // console.log(event.currentTarget.id);
    if (target.id === "bfood") {
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
    const baskets = JSON.parse(
      localStorage.getItem(
        props.id === "bfood" ? "bfoodbaskets" : "localfoodbaskets"
      ) || "[]"
    );
    baskets[props.index].count = count;
    localStorage.setItem(
      props.id === "bfood" ? "bfoodbaskets" : "localfoodbaskets",
      JSON.stringify(baskets)
    );
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
