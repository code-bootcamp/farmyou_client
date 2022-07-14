import { gql } from "@apollo/client";

export const FETCH_UGLY_PRODUCTS = gql`
  query fetchUglyProducts {
    fetchUglyProducts {
      id
      title
      price
      quantity
      seller {
        name
      }
    }
  }
`;
