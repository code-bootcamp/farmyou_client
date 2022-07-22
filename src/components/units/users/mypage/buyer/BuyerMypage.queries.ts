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
  mutation checkIfLoggedUser($password: String!) {
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
export const ASSIGN_MAIN = gql`
  mutation assignMain($userId: String!, $addressId: String!) {
    assignMain(userId: $userId, addressId: $addressId) {
      id
    }
  }
`;
export const DELETE_ADDRESS = gql`
  mutation deleteAddress($id: String!) {
    deleteAddress(id: $id)
  }
`;

export const FETCH_COMPLETE_PAYMENTS = gql`
  query fetchCompletePayments {
    fetchCompletePayments {
      id
      impUid
      amount
      createdAt
      productDirect {
        id
        title
        price
        files {
          url
        }
        directStore {
          id
          name
        }
      }
      productUgly {
        id
        title
        price
        files {
          url
        }
        seller {
          id
          name
          phone
        }
      }
      invoice
    }
  }
`;

export const FETCH_CANCELED_PAYMENTS = gql`
  query fetchCanceledPayments {
    fetchCanceledPayments {
      id
      impUid
      amount
      createdAt
      productDirect {
        id
        title
        price
        files {
          url
        }
      }
      productUgly {
        id
        title
        price
        files {
          url
        }
      }
      invoice
    }
  }
`;

export const UPDATE_INVOICE = gql`
  mutation updateInvoice($paymentId: String!, $invoiceNum: String!) {
    updateInvoice(paymentId: $paymentId, invoiceNum: $invoiceNum) {
      id
      impUid
      amount
      paymentComplete
    }
  }
`;

export const FETCH_DIRECT_PRODUCTS_BY_USER = gql`
  query fetchDirectProductsByUser {
    fetchDirectProductsByUser {
      id
      title
      price
      createdAt
      isDeleted
      quantity
      directStore {
        id
        name
      }
    }
  }
`;
