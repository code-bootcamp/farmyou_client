import { gql } from "@apollo/client";

export const FETCH_UGLY_PRODUCT = gql`
  query fetchUglyProduct($productId: String!) {
    fetchUglyProduct(productId: $productId) {
      id
      title
      content
      price
      createdAt
      quantity
      origin
      seller {
        name
        id
        email
        phone
        grade
        like
      }
    }
  }
`;

export const FETCH_DIRECT_PRODUCT = gql`
  query fetchDirectProduct($productId: String!) {
    fetchUglyProduct(productId: $productId) {
      id
      title
      content
      price
      createdAt
      quantity
      origin
    }
  }
`;
