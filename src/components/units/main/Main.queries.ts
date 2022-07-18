import { gql } from "@apollo/client";

export const FETCH_DIRECT_STORE = gql`
  query fetchDirectStore($name: String) {
    fetchDirectStore(name: $name) {
      id
      name
    }
  }
`;
