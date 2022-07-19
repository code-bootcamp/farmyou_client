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
        name
      }
    }
  }
`;

export const CREATE_INQUIRY = gql`
  mutation createInquiry(
    $title: String!
    $question: String!
    $productDirectId: String
    $productUglyId: String
  ) {
    createInquiry(
      title: $title
      question: $question
      productDirectId: $productDirectId
      productUglyId: $productUglyId
    )
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

export const POST_RESPONSE = gql`
  mutation postResponse(
    $inquiryId: String!
    $answerTitle: String!
    $answer: String!
  ) {
    postResponse(
      inquiryId: $inquiryId
      answerTitle: $answerTitle
      answer: $answer
    )
  }
`;

export const EDIT_INQUIRY = gql`
  mutation editInquiry(
    $inquiryId: String!
    $title: String!
    $question: String!
  ) {
    editInquiry(inquiryId: $inquiryId, title: $title, question: $question) {
      id
    }
  }
`;
