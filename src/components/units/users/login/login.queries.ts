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
