import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!, $userType: String!) {
    login(email: $email, password: $password, userType: $userType)
  }
`;
