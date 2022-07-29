import { gql } from "@apollo/client";
import { Modal } from "antd";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient("https://farmback.shop/graphql", {
      credentials: "include",
    });
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error: any) {
    Modal.error({ content: "로그인이 만료되었습니다! 다시 로그인해주세요!" });
  }
}
