import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BfoodWrite from "../../../../src/components/units/bfood/write/BfoodWrite.container";

const FETCH_PRODUCT_UGLY = gql`
  query fetchProductUgly($productId: String!) {
    fetchProductUgly(productId: $productId) {
      id
      title
      content
      price
      quantity
      origin
      files {
        url
      }
    }
  }
`;

export default function BFoodEditPage() {
  const router = useRouter();

  const { data: fetchProductUglyData, loading } = useQuery(FETCH_PRODUCT_UGLY, {
    variables: {
      productId: router.query.id,
    },
  });

  return (
    loading || (
      <BfoodWrite
        fetchProductUglyData={fetchProductUglyData}
        isEdit={true}
      ></BfoodWrite>
    )
  );
}
