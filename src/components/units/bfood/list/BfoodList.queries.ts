import { gql } from "@apollo/client";

export const FETCH_UGLY_PRODUCTS = gql`
  query fetchUglyProductsSortedByTitle(
    $title: String
    $sortBy: String = "최신순"
    $page: Float
  ) {
    fetchUglyProductsSortedByTitle(
      title: $title
      sortBy: $sortBy
      page: $page
    ) {
      id
      title
      price
      origin
      quantity
      createdAt
      content
      seller {
        name
        email
        grade
        id
        like
        phone
      }
      files {
        url
      }
    }
  }
`;
