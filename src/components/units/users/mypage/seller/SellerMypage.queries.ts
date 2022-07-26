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

export const CHECK_IF_LOGGED_SELLER = gql`
  mutation checkIfLoggedSeller($password: String!) {
    checkIfLoggedSeller(password: $password)
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]) {
    uploadFile(files: $files)
  }
`;
export const UPDATE_SELLER = gql`
  mutation updateSeller(
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

export const FETCH_UGLY_PRODUCTS_BY_SELLER = gql`
  query fetchUglyProductsBySeller {
    fetchUglyProductsBySeller {
      id
      title
      price
      createdAt
      files {
        url
      }
    }
  }
`;

export const FETCH_COMPLETED_PAYMENTS_FOR_SELLER = gql`
  query fetchCompletedPaymentsForSeller($sellerId: String!) {
    fetchCompletedPaymentsForSeller(sellerId: $sellerId) {
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
