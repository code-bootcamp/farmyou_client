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

export const CREATE_ADDRESS = gql`
  mutation createAddress(
    $address: String!
    $detailedAddress: String
    $postalCode: String!
    $userId: String!
    $isMain: Boolean!
  ) {
    createAddress(
      address: $address
      detailedAddress: $detailedAddress
      postalCode: $postalCode
      userId: $userId
      isMain: $isMain
    ) {
      id
      address
      detailedAddress
      postalCode
      isMain
    }
  }
`;

export const BUY_PRODUCT = gql`
  mutation buyProduct(
    $productType: String!
    $productId: String!
    $quantity: Float!
  ) {
    buyProduct(
      productType: $productType
      productId: $productId
      quantity: $quantity
    ) {
      id
    }
  }
`;
