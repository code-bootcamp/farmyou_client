import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      email
      phone
      type
    }
  }
`;

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;
