import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import Basket from "../../../src/components/units/users/basket/basket.container";

export default function CartPage() {
  useAuth();
  return <Basket />;
}
