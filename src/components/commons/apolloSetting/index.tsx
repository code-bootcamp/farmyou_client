import { ReactNode, useEffect } from "react";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { IsLoadedState, TokenState } from "../store";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { getAccessToken } from "../lib/getAccessToken";
import { onError } from "@apollo/client/link/error";

interface IProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(TokenState);
  const [isLoad, setIsLoaded] = useRecoilState(IsLoadedState);
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
      setIsLoaded(true);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            // });
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://garbi.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
