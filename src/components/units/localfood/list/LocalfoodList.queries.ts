import { gql } from "@apollo/client";

export const FETCH_DIRECT_PRODUCTS = gql`
  query fetchDirectProductsSortedByTitle(
    $title: String
    $sortBy: String = "최신순"
    $directStoreId: String
    $categoryId: String
    $page: Float
  ) {
    fetchDirectProductsSortedByTitle(
      title: $title
      sortBy: $sortBy
      directStoreId: $directStoreId
      categoryId: $categoryId
      page: $page
    ) {
      id
      title
      content
      price
      createdAt
      quantity
      directStore {
        name
      }
      files {
        url
      }
    }
  }
`;
