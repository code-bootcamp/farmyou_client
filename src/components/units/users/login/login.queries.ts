import { gql } from "@apollo/client";

export const LOG_IN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;

export const LOG_IN_SELLER = gql`
  mutation loginSeller($email: String!, $password: String!) {
    loginSeller(email: $email, password: $password)
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

export const FETCH_USER_BY_EMAIL = gql`
  query fetchUserByEmail($email: String!) {
    fetchUserByEmail(email: $email) {
      id
      name
      email
      phone
      type
    }
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($email: String!, $newPassword: String!) {
    updateUserPassword(email: $email, newPassword: $newPassword) {
      id
      name
    }
  }
`;

export const UPDATE_SELLER_PASSWORD = gql`
  mutation updateSellerPassword($email: String!, $newPassword: String!) {
    updateSellerPassword(email: $email, newPassword: $newPassword) {
      id
      name
    }
  }
`;
