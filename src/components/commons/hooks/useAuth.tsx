import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
// interface IFetchUserLoggedIn {
//   id?: string;
//   name?: string;
//   email?: string;
//   type?: string;
// }
const NO_USER = ["/bfood/write", "/bfood/[id]/edit"];

const NO_SELLER = ["/users/cart", "/users/payment"];
export function useAuth() {
  const router = useRouter();
  const isNoUser = NO_USER.includes(router.pathname);
  const isNoSeller = NO_SELLER.includes(router.pathname);
  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  useEffect(() => {
    console.log(loading);
    if (!loading) {
      if (data) {
        if (data?.fetchUserLoggedIn.type === "user") {
          if (isNoUser) {
            Modal.error({
              content: "접근이 불가능한 페이지입니다.",
              onOk() {
                router.back();
              },
            });
          }
        } else {
          if (isNoSeller) {
            Modal.error({
              content: "접근이 불가능한 페이지입니다.",
              onOk() {
                router.back();
              },
            });
          }
        }
      } else {
        Modal.error({
          content: "로그인 후 이용 가능합니다.",
          onOk() {
            router.push("/users/login");
          },
        });
      }
    }
  }, [loading]);
}
