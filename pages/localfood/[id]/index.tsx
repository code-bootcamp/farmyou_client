import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Detail from "../../../src/components/units/detail/Detail.container";
import { FETCH_PRODUCT_DIRECT } from "../../../src/components/units/detail/Detail.queries";

export default function LocalFoodDetailPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_PRODUCT_DIRECT, {
    variables: {
      productId: router.query.id,
    },
  });
  console.log(data);

  return loading || <Detail data={data.fetchProductDirect}></Detail>;
}
