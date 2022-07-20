import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment(
    $impUid: String!
    $amount: Float!
    $productType: String!
    $productId: String!
    $quantity: Float!
  ) {
    createPayment(
      impUid: $impUid
      amount: $amount
      productType: $productType
      productId: $productId
      quantity: $quantity
    ) {
      id
      impUid
      amount
      paymentComplete
    }
  }
`;

export const FETCH_ADDRESSES_OF_THE_USER = gql`
  query fetchAddressesOfTheUser($userId: String!) {
    fetchAddressesOfTheUser(userId: $userId) {
      id
      address
      detailedAddress
      postalCode
      isMain
      user {
        id
        email
        name
        phone
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      phone
      email
    }
  }
`;

export const ASSIGN_MAIN = gql`
  mutation assignMain($userId: String!, $addressId: String!) {
    assignMain(userId: $userId, addressId: $addressId) {
      id
      address
    }
  }
`;
