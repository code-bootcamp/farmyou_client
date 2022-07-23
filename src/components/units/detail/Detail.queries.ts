import { gql } from "@apollo/client";

export const FETCH_PRODUCT_UGLY = gql`
  query fetchProductUgly($productId: String!) {
    fetchProductUgly(productId: $productId) {
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

export const FETCH_PRODUCT_DIRECT = gql`
  query fetchProductDirect($productId: String!) {
    fetchProductDirect(productId: $productId) {
      id
      title
      content
      price
      createdAt
      quantity
    }
  }
`;
