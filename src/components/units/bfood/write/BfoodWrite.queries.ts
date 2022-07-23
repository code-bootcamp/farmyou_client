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

export const UPDATE_PRODUCT_UGLY = gql`
  mutation updateProductUgly(
    $productId: String!
    $title: String
    $content: String
    $price: Float
    $quantity: Float
    $origin: String
    $createFileInput: CreateProductUglyInput
  ) {
    updateProductUgly(
      productId: $productId
      title: $title
      content: $content
      price: $price
      quantity: $quantity
      origin: $origin
      createFileInput: $createFileInput
    ) {
      id
    }
  }
`;
