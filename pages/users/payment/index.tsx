import { useQuery } from "@apollo/client";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import Payment from "../../../src/components/units/users/payment/payment.container";
import { FETCH_USER_LOGGED_IN } from "../../../src/components/units/users/payment/payment.queries";

export default function PaymentPage() {
  useAuth();
  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);

  return loading || <Payment data={data} />;
}
