import { gql } from "@apollo/client";

export const FETCH_INQUIRIES_BY_PRODUCT = gql`
  query fetchInquiriesByProduct($productId: String!) {
    fetchInquiriesByProduct(productId: $productId) {
      id
      title
      question
      answerTitle
      answer
      status
      createdAt
      user {
        id
      }
    }
  }
`;
