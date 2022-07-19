import { gql } from "@apollo/client";

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

export const FETCH_ADDRESSES_OF_THE_USER = gql`
  query fetchAddressesOfTheUser($userId: String!) {
    fetchAddressesOfTheUser(userId: $userId) {
      id
      address
      detailedAddress
      isMain
    }
  }
`;

export const CHECK_IF_LOGGED_USER = gql`
  query checkIfLoggedUser($password: String!) {
    checkIfLoggedUser(password: $password)
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]) {
    uploadFile(files: $files)
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser(
    $name: String
    $password: String
    $phone: String
    $imageUrl: String
  ) {
    updateUser(
      name: $name
      password: $password
      phone: $phone
      imageUrl: $imageUrl
    ) {
      name
      phone
    }
  }
`;
