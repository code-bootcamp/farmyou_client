import { gql } from "@apollo/client";

export const FETCH_DIRECT_PRODUCTS_BY_DIRECT_STORE_ID = gql`
  query fetchDirectProductsByDirectStoreId($directStoreId: String!) {
    fetchDirectProductsByDirectStoreId(directStoreId: $directStoreId) {
      id
      title
      price
    }
  }
`;

export const FETCH_DIRECT_PRODUCTS_BY_STORE_AND_CATEGORY_BY_DATE_CREATED = gql`
  query fetchDirectProductsByStoreAndCategoryByDateCreated(
    $directStoreId: String
    $categoryId: String
    $page: Float!
  ) {
    fetchDirectProductsByStoreAndCategoryByDateCreated(
      directStoreId: $directStoreId
      categoryId: $categoryId
      page: $page
    ) {
      id
      title
      price
    }
  }
`;
