import { gql } from "@apollo/client";

export const CREATE_PRODUCT_UGLY = gql`
  mutation createProductUgly(
    $title: String!
    $content: String!
    $price: Float!
    $quantity: Float!
    $origin: String!
    $sellerId: String!
    $files: [Upload!]
  ) {
    createProductUgly(
      title: $title
      content: $content
      price: $price
      quantity: $quantity
      origin: $origin
      sellerId: $sellerId
      files: $files
    ) {
      id
      title
      content
      price
      createdAt
    }
  }
`;
