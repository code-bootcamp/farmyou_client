import { gql } from "@apollo/client";

export const CREATE_PRODUCT_UGLY = gql`
  mutation createProductUgly {
    createProductUgly {
      id
      title
      content
      price
      createdAt
    }
  }
`;
