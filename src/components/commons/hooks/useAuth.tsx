import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Swal from "sweetalert2";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      email
      type
    }
  }
`;

const NO_USER = ["/bfood/write", "/bfood/[id]/edit"];
const NO_SELLER = ["/users/cart", "/users/payment"];
const NO_LOGIN = ["/users/cart"];

export async function useAuth() {
  const router = useRouter();

  const isNoUser = NO_USER.includes(router.pathname);
  const isNoSeller = NO_SELLER.includes(router.pathname);
  const isNoLogin = NO_LOGIN.includes(router.pathname);
  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    // if (!loading) {
    if (data) {
      if (data?.fetchUserLoggedIn.type === "user") {
        if (isNoUser) {
          Swal.fire({
            icon: "error",
            text: "접근이 불가능한 페이지입니다.",
          }).then((result) => {
            if (result.isConfirmed) {
              router.back();
            }
          });
        }
      } else {
        if (isNoSeller) {
          Swal.fire({
            icon: "error",
            text: "접근이 불가능한 페이지입니다.",
          }).then((result) => {
            if (result.isConfirmed) {
              router.back();
            }
          });
        }
      }
    } else {
      if (!loading) {
        if (!isNoLogin) {
          Swal.fire({
            icon: "error",
            text: "로그인 후 이용 가능합니다.",
          }).then((result) => {
            if (result.isConfirmed) {
              router.back();
            } else {
              router.back();
            }
          });
        }
      }
    }
    // }
  }, [data]);
}
