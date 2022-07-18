import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Detail from "../../../src/components/units/detail/Detail.container";
import { FETCH_UGLY_PRODUCT } from "../../../src/components/units/detail/Detail.queries";

export default function BfoodDetailPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_UGLY_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  return loading || <Detail data={data.fetchUglyProduct}></Detail>;
}
