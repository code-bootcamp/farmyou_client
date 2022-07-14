import { gql } from "@apollo/client";

export const CREATE_PRODUCT_UGLY = gql`
  mutation createProductUgly(
    $title: String!
    $content: String!
    $price: Float!
    $quantity: Float!
    $origin: String!
    $sellerId: String!
  ) {
    createProductUgly(
      title: $title
      content: $content
      price: $price
      quantity: $quantity
      origin: $origin
      sellerId: $sellerId
    ) {
      id
      title
      content
      price
      createdAt
    }
  }
`;
