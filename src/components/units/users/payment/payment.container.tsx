import { useEffect, useState } from "react";
import PaymentUI from "./payment.presenter";

export default function Payment() {
  const [isCart, setIsCart] = useState("");
  const [localfoodBaskets, setLocalfoodBaskets] = useState([]);
  const [bfoodBaskets, setBfoodBaskets] = useState([]);
  const [payProduct, setPayProduct] = useState({});
  const [localPrice, setLocalPrice] = useState(0);
  const [bPrice, setBPrice] = useState(0);

  useEffect(() => {
    setIsCart(sessionStorage.getItem("isCart") || "");
    setLocalfoodBaskets(
      JSON.parse(localStorage.getItem("localfoodbaskets") || "")
    );
    setBfoodBaskets(JSON.parse(localStorage.getItem("bfoodbaskets") || ""));
    setPayProduct(JSON.parse(localStorage.getItem("payProduct") || ""));
  }, []);

  useEffect(() => {
    const localfoodPrice = localfoodBaskets.map((el) => {
      return el.price * el.count;
    });
    const bfoodPrice = bfoodBaskets.map((el) => {
      return el.price * el.count;
    });

    setLocalPrice(
      localfoodPrice.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    );

    setBPrice(
      bfoodPrice.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    );
  }, [isCart]);

  console.log(localPrice, bPrice, payProduct);

  return (
    <PaymentUI
      isCart={isCart}
      localfoodBaskets={localfoodBaskets}
      bfoodBaskets={bfoodBaskets}
      payProduct={payProduct}
      localPrice={localPrice}
      bPrice={bPrice}
    />
  );
}
