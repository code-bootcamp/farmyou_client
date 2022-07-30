import { gql } from "@apollo/client";

export const CREATE_SELLER = gql`
  mutation createSeller(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
  ) {
    createSeller(
      name: $name
      email: $email
      password: $password
      phone: $phone
    ) {
      id
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
    $addressUser: CreateAddressUserInput!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      phone: $phone
      addressUser: $addressUser
    ) {
      id
      name
      email
    }
  }
`;

export const SEND_TOKEN = gql`
  mutation sendToken($phone: String!) {
    sendToken(phone: $phone)
  }
`;

export const CHECK_TOKEN = gql`
  mutation checkToken($phone: String!, $token: String!) {
    checkToken(phone: $phone, token: $token)
  }
`;
