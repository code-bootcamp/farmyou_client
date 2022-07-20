import { gql } from "@apollo/client";

export const CREATE_PRODUCT_UGLY = gql`
  mutation createProductUgly(
    $title: String!
    $content: String!
    $price: Float!
    $quantity: Float!
    $origin: String!
    $sellerId: String!
    $createFileInput: CreateProductUglyInput!
  ) {
    createProductUgly(
      title: $title
      content: $content
      price: $price
      quantity: $quantity
      origin: $origin
      sellerId: $sellerId
      createFileInput: $createFileInput
    ) {
      id
      title
      content
      price
      createdAt
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      email
      type
    }
  }
`;
