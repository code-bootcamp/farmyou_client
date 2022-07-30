import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Detail from "../../../src/components/units/detail/Detail.container";
import { FETCH_PRODUCT_UGLY } from "../../../src/components/units/detail/Detail.queries";

export default function BfoodDetailPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_PRODUCT_UGLY, {
    variables: {
      productId: router.query.id,
    },
  });

  return loading || <Detail data={data.fetchProductUgly}></Detail>;
}
